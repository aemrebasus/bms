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
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotAcceptableResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto';
import { FindOptions } from 'sequelize/types';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users Controller')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
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
