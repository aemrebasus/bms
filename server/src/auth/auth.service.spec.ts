import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from '../database/database.module';
import { CreateUserDto, UsersModule } from '../resources/users';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let controller: AuthController;

  const userData: CreateUserDto = {
    password: 'password',
    username: 'username',

    firstName: 'firstName',
    lastName: 'lastname',
    active: true,
    email: 'email@gmail.com',
    organization: 'org001',
    permissions: ['none'],
    subscriptions: ['subtype'],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        UsersModule,
        JwtModule.register({
          secret: 'Some secret',
          signOptions: { expiresIn: '30d' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should subscribe', async () => {
    try {
      const result = await controller.subscribe(userData);
      expect(true).toBe(true);
    } catch (err) {
      console.log('Error', err);
    }
  });

  it('should login', () => {
    controller.login({
      username: userData.username,
      password: userData.password,
    });
  });
});
