import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { StatusCodes } from 'http-status-codes';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  const VERSION = 'v1';
  const GLOBAL_PREFIX = 'api'.concat('/').concat(VERSION);

  app.setGlobalPrefix(GLOBAL_PREFIX);

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      errorHttpStatusCode: +StatusCodes.NOT_ACCEPTABLE,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Business Management')
    .setDescription('Business Management API')
    .setVersion('v1')
    .setBasePath(GLOBAL_PREFIX)
    .addTag('BMS API Specifications')

    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => {
    console.log('Application is up and running at port ', PORT);
  });
}
bootstrap();
