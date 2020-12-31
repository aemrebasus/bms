import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';

import { User, UsersModule } from './resources/users';
import { ProductsModule } from './resources/products/products.module';
import { Product } from './resources/products/entities/product.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.env.pwd, 'public'),
    }),
    SequelizeModule.forRoot({
      database: 'bma',
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      models: [User, Product],
      autoLoadModels: true,
      sync: {
        alter: true,
      },
    }),
    UsersModule,
    ProductsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Appling middlewares
    consumer
      .apply(
        cookieParser(),
        compression(),
        helmet(),
        helmet.hidePoweredBy(),
        morgan('tiny'),
      )
      .forRoutes('/');
  }
}
