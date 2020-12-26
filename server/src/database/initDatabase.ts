import { addSchemasToDatabase } from './addSchemasToDatabase';
import { DBS, schemas } from './models';

export function initDatabase() {
  addSchemasToDatabase({
    databaseName: DBS.USERS,
    schemas,
    syncOptions: { alter: true },
  });
}
