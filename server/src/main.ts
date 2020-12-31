import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = 3000;

  const options = new DocumentBuilder()
    .setTitle('Business Management')
    .setDescription('Business Management API')
    .setVersion('1.0')
    .addTag('bms')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(PORT, () => {
    console.log('Application is up and running at port ', PORT);
  });
}
bootstrap();
