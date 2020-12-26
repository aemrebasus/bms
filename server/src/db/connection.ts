import { Sequelize, SyncOptions } from 'sequelize';
import { ModelAttributes } from 'sequelize/types';
import { UserSchema } from './user.schema';

export function connect(
  databaseName: string,
  schemas: { name: string; schema: ModelAttributes }[],
  syncOptions?: SyncOptions
) {
  const con = new Sequelize({
    dialect: 'sqlite',
    storage: `database/${databaseName}.sqlite`,
  });

  for (const schema of schemas) {
    con.define(schema.name, schema.schema, { paranoid: true });
  }

  con.sync(syncOptions);

  return con;
}

export const connection = connect('db', [{ name: 'users', schema: UserSchema }]);
