import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../resources/products/entities/product.entity';
import { User } from '../resources/users';

@Module({
  imports: [
    SequelizeModule.forRoot({
      database: 'bma',
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      models: [User, Product],
      autoLoadModels: true,
      logging: false,
      sync: {
        // Set them to false in testing.
        alter: true,
        force: true,
      },
    }),
  ],
})
export class DatabaseModule {}
