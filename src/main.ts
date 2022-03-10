import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      /*whitelist : true => Si los atributos que se mandan en el Request
        no están en el DTO, los descarta para evitar
        inserción de datos maliciosos o datos que no
        están contemplados en la BD */
      whitelist: true,
      // enviar alerta de datos no contemplados en BD
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
