import { Controller } from './decorators/Controller';
import { Get } from './decorators/Get';
import { Param } from './decorators/Param';
import { Query } from './decorators/Query';
import { Cookie } from './decorators/Cookie';
@Controller('users')
export class UserRouter {
  @Get('name')
  getName(@Query() name: string) {
    return name;
  }

  @Get('id/:id')
  getId(@Cookie() id, @Param() p, @Query() q) {
    return {
      ...id,
      ...p,
      ...q,
    };
  }
}
