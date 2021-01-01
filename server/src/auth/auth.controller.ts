import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiCreatedResponse,
  ApiNotAcceptableResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from '../resources/users';
import { AuthService } from './auth.service';
import { UserCredentials } from './user.credentials';
import { Request, Response } from 'express';

@Controller('auth')
@ApiTags('Auth Controller')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('verify')
  async isAuth(@Req() req: Request) {
    const token = req.cookies['token'];
    if (token) {
      return this.authService.verifyToken(token);
    }
  }

  @Post('login')
  @ApiAcceptedResponse()
  @ApiNotAcceptableResponse()
  async login(@Body() fromBody: UserCredentials, @Res() res: Response) {
    const user = { ...fromBody };
    const token = await this.authService.login(user);
    res.cookie('token', token);
    res.status(HttpStatus.ACCEPTED).end();
  }

  @Post('subscribe')
  @ApiCreatedResponse()
  @ApiNotAcceptableResponse()
  subscribe(@Body() user: CreateUserDto) {
    return this.authService.subscribe(user);
  }
}
