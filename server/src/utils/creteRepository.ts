import { ValueProvider } from '@nestjs/common';
import { Model } from 'sequelize-typescript';

export function createRepository(
  name: string,
  model: typeof Model,
): ValueProvider {
  return {
    provide: name,
    useValue: model,
  };
}
