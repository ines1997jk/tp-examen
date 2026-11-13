/*
import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  // --- CONFIGURATION SWAGGER (AJOUTER CE BLOC) ---
  const config = new DocumentBuilder()
    .setTitle('API de gestion des véhicules')
    .setDescription('TP NestJS - Test des routes CRUD avec Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // L'interface sera sur /api
  const config = app.get(ConfigService);
const port = Number(config.get<string>('PORT') ?? '3000');
await app.listen(port);
console.log(`Application running on http://localhost:${port}`);

}
bootstrap();
*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; // <-- AJOUTER CECI

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation (déjà fait)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // --- CONFIGURATION SWAGGER (AJOUTER CE BLOC) ---
  const config = new DocumentBuilder()
    .setTitle('API de gestion des véhicules')
    .setDescription('TP NestJS - Test des routes CRUD avec Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // L'interface sera sur /api
  // ------------------------------------------------

  // Port depuis .env
  const configService = app.get(ConfigService);
  const port = Number(configService.get<string>('PORT') ?? '3000');

  await app.listen(port);
  console.log(`Application running on http://localhost:${port}`);
  console.log(`Swagger disponible sur http://localhost:${port}/api`); // <-- AJOUTER CECI
}
bootstrap();