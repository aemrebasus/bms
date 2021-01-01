import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Ping')
export class AppController {
  @Get('ping')
  @ApiOkResponse({ description: 'Server is up.' })
  ping(): string {
    return 'pong';
  }
}
