import {
  BulkCreateOptions,
  CreateOptions,
  DestroyOptions,
  FindOptions,
  UpdateOptions,
  UpsertOptions,
} from 'sequelize';

export interface IService<T> {
  findAll(findOptions: FindOptions): Promise<T[]>;
  findOne(findOptions: FindOptions): Promise<T>;
  findById(id: string, dto: string[]): Promise<T>;
  create(value: T, options?: CreateOptions);
  bulkCreate(values: T[], options: BulkCreateOptions);
  update(value: Partial<T>, options: UpdateOptions);
  upsert(value: Partial<T>, options: UpsertOptions);
  remove(removeOptions: DestroyOptions);
}
