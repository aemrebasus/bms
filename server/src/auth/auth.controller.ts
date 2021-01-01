import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiCreatedResponse,
  ApiNotAcceptableResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../resources/users';
import { AuthService } from './auth.service';
import { UserCredentials } from './user.credentials';

@Controller('auth')
@ApiTags('Auth Controller')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiAcceptedResponse()
  @ApiNotAcceptableResponse()
  async login(
    // @Query() userCredentials: UserCredentials,
    @Body() userCredentialsFromBody: UserCredentials,
  ) {
    console.log(userCredentialsFromBody);
    const result = await this.authService.login(userCredentialsFromBody);
    return result;
  }

  @Post('subscribe')
  @ApiCreatedResponse()
  @ApiNotAcceptableResponse()
  subscribe(@Body() user: CreateUserDto) {
    return this.authService.subscribe(user);
  }
}
