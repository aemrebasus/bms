import { DataTypes, Model, ModelAttributes } from 'sequelize';

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  permissions: string;
}

export const UserSchema: ModelAttributes<Model<UserInterface, UserInterface>> = {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [2, 255] },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { len: [2, 255] },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: { type: DataTypes.STRING, allowNull: false },
  permissions: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'guest',
  },
};
