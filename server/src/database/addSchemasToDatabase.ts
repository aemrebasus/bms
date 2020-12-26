import { connectSQLite } from './connectSQLite';
import { SyncOptions } from 'sequelize';
import { SchemaType } from './models';

export type AddSchemasOptions = {
  databaseName: string;
  schemas: SchemaType[];
  syncOptions?: SyncOptions;
};

export function addSchemasToDatabase(options: AddSchemasOptions) {
  const con = connectSQLite(options.databaseName);
  for (const schema of options.schemas) {
    con.define(schema.name, schema.schema, {
      paranoid: true,
    });
  }
  con.sync(options.syncOptions);
  con.close();
}
