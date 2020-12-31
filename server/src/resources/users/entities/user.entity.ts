import { Injectable } from '@nestjs/common';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({ tableName: 'users' })
@Injectable()
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  password: string;

  @Column({
    type: DataType.STRING,
  })
  organization: string;
}
