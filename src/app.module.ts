import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { VehiculeModule } from './vehicule/vehicule.module.js';
import { ConfigModule } from '@nestjs/config';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
   }), VehiculeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
