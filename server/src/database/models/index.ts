import { ModelAttributes } from 'sequelize/types';
import { TABLES } from './enum';
import { UserSchema } from './user.schema';
export * from './enum';

export type SchemaType = { name: string; schema: ModelAttributes };

export const schemas: SchemaType[] = [{ name: TABLES.USERS, schema: UserSchema }];
