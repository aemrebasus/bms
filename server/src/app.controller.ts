import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('api')
@ApiTags('bms')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  @ApiOkResponse({ description: 'Server is up.' })
  ping(): string {
    return 'pong';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
