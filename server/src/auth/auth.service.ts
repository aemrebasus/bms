import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, UsersService } from '../resources/users';
import { UserCredentials } from './user.credentials';
import { compare, genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwt: JwtService) {}

  async verifyToken(token: string): Promise<CreateUserDto> {
    return await this.jwt.verify(token);
  }

  private async verifyUserCredentials(userCredentials: UserCredentials) {
    let result = await this.userService.findByUserName(
      userCredentials.username,
    );

    if (!result)
      result = await this.userService.findByEmail(userCredentials.username);

    if (result && (await compare(userCredentials.password, result.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = result;
      return rest;
    }

    throw new NotFoundException();
  }

  async login(userCredentials: UserCredentials) {
    const user = await this.verifyUserCredentials(userCredentials);
    return this.jwt.sign(user);
  }

  private async preparePassword(password: string) {
    return await hash(password, await genSalt(10));
  }

  async subscribe(user: CreateUserDto) {
    const { password, ...newUser } = user;

    const encodedPassword = await this.preparePassword(password);

    const createdUser = await this.userService.create({
      ...newUser,
      active: true,
      password: encodedPassword,
    });

    return createdUser;
  }

  async activeAccount(userCredentials: UserCredentials) {
    const user = await this.verifyUserCredentials(userCredentials);
    const result = await this.userService.update(
      { active: true },
      { where: { username: user.username } },
    );
    return !!result;
  }
}
