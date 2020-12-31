import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from '../base-resource/base.controller';
import { CreateProductDto } from './dto/create-product.dto';
import { FindOptions } from 'sequelize/types';
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
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
@ApiTags('products')
export class ProductsController
  implements BaseController<CreateProductDto, CreateProductDto> {
  constructor(private service: ProductsService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  create(@Body() item: CreateProductDto) {
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
  update(@Query() updateOptions, @Body() updateDTO: UpdateProductDto) {
    return this.service.update(updateDTO, updateOptions);
  }

  @Put(':id')
  @ApiCreatedResponse({ description: 'Record has been created successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  updateById(@Param('id') id: string, @Body() updateUserDto: UpdateProductDto) {
    return this.service.updateById(updateUserDto, +id);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Record has been deleted successfuly.' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  removeById(@Param('id') id: string) {
    return this.service.remove({ where: { id: +id } });
  }
}
