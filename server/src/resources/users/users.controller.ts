import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BaseController } from '../base-resource/base.controller';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto';
import { FindOptions } from 'sequelize/types';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController
  implements BaseController<CreateUserDto, CreateUserDto> {
  constructor(private readonly service: UsersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Ok' })
  @ApiForbiddenResponse({ description: 'forbidden' })
  @ApiNoContentResponse({ description: 'Records are not found.' })
  findAll(@Query() findOptions: FindOptions) {
    return this.service.findAll(findOptions);
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Ok' })
  @ApiForbiddenResponse({ description: 'forbidden' })
  @ApiNoContentResponse({ description: 'Records are not found.' })
  findById(@Param('id') id: string) {
    return this.service.findOneById(+id);
  }

  @Put()
  @ApiCreatedResponse({ description: 'Record has been updated successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  update(@Query() updateOptions, @Body() updateDTO: UpdateUserDto) {
    return this.service.update(updateDTO, updateOptions);
  }

  @Put(':id')
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  updateById(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.service.updateById(updateUserDto, +id);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Record has been deleted successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  removeById(@Param('id') id: string) {
    return this.service.remove({ where: { id: +id } });
  }
}
