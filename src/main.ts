// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { ValidationPipe } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Globale Validierung aktivieren (prüft DTOs automatisch)
//   app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

//   // Swagger Setup
//   const config = new DocumentBuilder()
//     .setTitle('Mittweida Aktivitäten API')
//     .setDescription('API für Aktivitäten planen und verwalten')
//     .setVersion('1.0')
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);

//   await app.listen(3000);
//   console.log('🚀 Server läuft auf http://localhost:3000');
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  const config = new DocumentBuilder()
    .setTitle('Mittweida Aktivitäten API')
    .setDescription('API für Aktivitäten planen und verwalten')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log('Server läuft auf http://localhost:3000');
  console.log('Swagger unter http://localhost:3000/api');
}
bootstrap();
