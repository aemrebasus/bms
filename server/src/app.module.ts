import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';

import { UsersModule } from './resources/users';
import { ProductsModule } from './resources/products/products.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.env.pwd, 'public'),
    }),
    UsersModule,
    ProductsModule,
    DatabaseModule,
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
