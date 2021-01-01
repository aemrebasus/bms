import { Model } from 'sequelize-typescript';
import {
  CreateOptions,
  DestroyOptions,
  FindOptions,
  UpdateOptions,
} from 'sequelize';
import { NotFoundException } from '@nestjs/common';

export class BaseEntity extends Model<any, any> {}

export class BaseService {
  constructor(private repository: typeof BaseEntity) {}

  async create(entity: any, createOptions?: CreateOptions) {
    const result = await this.repository.create(entity, createOptions);
    if (result) {
      return result;
    }
  }

  async findAll(findOptions?: FindOptions) {
    const result = await this.repository.findAll(findOptions);
    if (result && result.length > 0) {
      return result;
    }
    throw new NotFoundException();
  }

  findOne(findOptions: FindOptions) {
    return this.repository.findOne(findOptions);
  }

  async findOneById(id: number) {
    const result = await this.repository.findOne({ where: { id } });
    if (result) {
      console.log('===================  result>', result);
      return result;
    }
    throw new NotFoundException();
  }

  update(updated: any, updateOptions?: UpdateOptions) {
    return this.repository.update(updated, updateOptions);
  }

  updateById(updated: any, id: number) {
    return this.repository.update(updated, { where: { id } });
  }

  remove(destroyOptions: DestroyOptions) {
    return this.repository.destroy(destroyOptions);
  }

  removeById(id: number) {
    return this.repository.destroy({ where: { id } });
  }
}
