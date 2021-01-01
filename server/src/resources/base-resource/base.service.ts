import { Model } from 'sequelize-typescript';
import {
  CreateOptions,
  DestroyOptions,
  FindOptions,
  UpdateOptions,
} from 'sequelize';
import { HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

export class BaseEntity extends Model<any, any> {}

export class BaseService {
  constructor(private repository: typeof BaseEntity | any) {}

  async create(entity: any, createOptions?: CreateOptions) {
    try {
      const result = await this.repository.create(entity, createOptions);
      if (result) {
        return result;
      }
    } catch (err) {
      if (err?.original?.detail) {
        const message = err.original.detail;
        throw new HttpException(message, HttpStatus.NOT_ACCEPTABLE);
      }
      throw err;
    }
  }

  async findAll(findOptions?: FindOptions) {
    const result = await this.repository.findAll({
      ...findOptions,
      mapToModel: true,
    });
    if (result && result.length > 0) {
      return result;
    }
    throw new NotFoundException();
  }

  async findOne(findOptions: FindOptions) {
    const result = await this.repository.findOne({ ...findOptions });
    if (result) {
      return result.get();
    }
    throw new NotFoundException();
  }

  async findOneById(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  update(updated: any, updateOptions?: UpdateOptions) {
    try {
      return this.repository.update(updated, updateOptions);
    } catch (err) {
      const message = err.original
        ? err.original.detail || err.msg || err.messages
        : 'Probably Validation Error';
      throw new HttpException(message, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  updateById(updated: any, id: number) {
    try {
      return this.repository.update(updated, { where: { id } });
    } catch (err) {
      const message = err.original
        ? err.original.detail || err.msg || err.messages
        : 'Probably Validation Error';
      throw new HttpException(message, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  remove(destroyOptions: DestroyOptions) {
    return this.repository.destroy(destroyOptions);
  }

  removeById(id: number) {
    return this.repository.destroy({ where: { id } });
  }
}
