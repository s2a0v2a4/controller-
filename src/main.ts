import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3000);
// }




///Server mit Log auf Port starten
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('🚀 Server läuft auf http://localhost:3000');
}
bootstrap();

bootstrap();