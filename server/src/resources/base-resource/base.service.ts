import { Model } from 'sequelize-typescript';
import {
  CreateOptions,
  DestroyOptions,
  FindOptions,
  UpdateOptions,
} from 'sequelize';

export class BaseEntity extends Model<any, any> {}

export class BaseService {
  constructor(private repository: typeof BaseEntity) {}

  async create(entity: any, createOptions?: CreateOptions) {
    return await this.repository.create(entity, createOptions);
  }

  async findAll(findOptions?: FindOptions) {
    return this.repository.findAll(findOptions);
  }

  findOne(findOptions: FindOptions) {
    return this.repository.findOne(findOptions);
  }

  findOneById(id: number) {
    return this.repository.findOne({ where: { id } });
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
