import { Model, ModelCtor } from 'sequelize/types';
import { connection } from './connection';

export function getRepository<T = any>(modelName: string): ModelCtor<Model<T, T>> {
  return connection.model(modelName);
}
