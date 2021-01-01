import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from './auth/public.decorator';

@Controller()
@ApiTags('Ping')
export class AppController {
  @Get('ping')
  @Public()
  @ApiOkResponse({ description: 'Server is up.' })
  ping(): string {
    return 'pong';
  }
}
