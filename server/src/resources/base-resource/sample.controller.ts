/**
 * Sample Controller Desing.
 */

import { FindOptions } from 'sequelize/types';
import { Body, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { BaseService } from './base.service';

export class SampleController<CreateDTO, UpdateDTO> {
  constructor(private service: BaseService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  create(@Body() item: CreateDTO) {
    return this.service.create(item);
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
  update(@Query() updateOptions, @Body() updateDTO: UpdateDTO) {
    return this.service.update(updateDTO, updateOptions);
  }

  @Put(':id')
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  updateById(@Param('id') id: string, @Body() updateUserDto: UpdateDTO) {
    return this.service.updateById(updateUserDto, +id);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Record has been deleted successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  removeById(@Param('id') id: string) {
    return this.service.remove({ where: { id: +id } });
  }
}
