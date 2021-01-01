import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'users', paranoid: true })
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [2, 255],
    },
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],
    },
  })
  password: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ['guest'],
  })
  permissions: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ['none'],
    validate: {
      len: [1, 255],
    },
  })
  subscriptions: string[];

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [2, 255],
    },
  })
  organization: string;

  @Column({
    defaultValue: false,
    type: DataType.BOOLEAN,
  })
  active: boolean;
}
