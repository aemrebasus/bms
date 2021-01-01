import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiSecurity,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotAcceptableResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiCookieAuth,
  ApiOAuth2,
  ApiBasicAuth,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto';
import { FindOptions } from 'sequelize/types';
import { UsersService } from './users.service';
import { HasPermission } from 'src/auth/permission.decorator';
import { JWT_TOKEN_KEY } from 'src/auth/auth.consts';

@Controller('users')
@ApiTags('Users Controller')
@ApiCookieAuth(JWT_TOKEN_KEY)
@ApiBearerAuth('Bearer')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  @HasPermission(['user:create'])
  @ApiOAuth2(['user:create'], 'permissions')
  @ApiCreatedResponse({ description: 'Created' })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized Request',
  })
  @ApiNotAcceptableResponse({ description: 'Invalid Input' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Ok' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  findAll(@Query() findOptions: FindOptions) {
    return this.service.findAll(findOptions);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Ok' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  findById(@Param('id', new ParseIntPipe()) id: number) {
    return this.service.findOneById(id);
  }

  @Put()
  @ApiCreatedResponse({ description: 'Updated' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  update(@Query() updateOptions, @Body() updateDTO: UpdateUserDto) {
    return this.service.update(updateDTO, updateOptions);
  }

  @Put(':id')
  @ApiCreatedResponse({ description: 'Updated' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  updateById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.service.updateById(updateUserDto, id);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Deleted' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized Request' })
  removeById(@Param('id') id: string) {
    return this.service.remove({ where: { id: +id } });
  }
}
