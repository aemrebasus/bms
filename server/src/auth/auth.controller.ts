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
import { HasPermission } from './permission.decorator';
import { Public } from './public.decorator';

@Controller('auth')
@ApiTags('Auth Controller')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HasPermission(['sr'])
  @Get('secured')
  async securedRoute() {
    return 'secured';
  }

  @Get('verify')
  async isAuth(@Req() req: Request) {
    const token = req.cookies['token'];
    if (token) {
      return this.authService.verifyToken(token);
    }
  }

  @Public()
  @Post('login')
  @ApiAcceptedResponse()
  @ApiNotAcceptableResponse()
  async login(@Body() fromBody: UserCredentials, @Res() res: Response) {
    const user = { ...fromBody };
    const token = await this.authService.login(user);
    res.cookie('token', token);
    res.status(HttpStatus.ACCEPTED).end();
  }

  @Public()
  @Post('subscribe')
  @ApiCreatedResponse()
  @ApiNotAcceptableResponse()
  subscribe(@Body() user: CreateUserDto) {
    return this.authService.subscribe(user);
  }
}
