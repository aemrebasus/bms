import { Sequelize } from 'sequelize';
import { connectSQLite } from './connectSQLite';
import { DBS } from './models/enum';

describe('Database Connection', () => {
  let instance;
  beforeAll(() => {
    instance = connectSQLite(DBS.USERS);
  });

  it('Should be instance of Sequelize.', () => {
    expect(instance).toBeInstanceOf(Sequelize);
  });
});
