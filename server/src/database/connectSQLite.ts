import { Sequelize } from 'sequelize';

export function connectSQLite(databaseName: string): Sequelize {
  return new Sequelize({
    dialect: 'sqlite',
    storage: `database/${databaseName}.sqlite`,
  });
}
