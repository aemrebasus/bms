import { Controller } from './decorators/Controller';
import { Get } from './decorators/Get';
import { Param } from './decorators/Param';
import { Query } from './decorators/Query';

@Controller('users')
export class UserRouter {
  @Get('name')
  getName(@Query() name: string) {
    return name;
  }

  @Get('id/:id')
  getId(@Param() id: string) {
    return id;
  }
}
