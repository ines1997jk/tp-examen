import { Module } from '@nestjs/common';
import { VehiculeService } from './vehicule.service.js';
import { VehiculeController } from './vehicule.controller.js';

@Module({
  controllers: [VehiculeController],
  providers: [VehiculeService],
})
export class VehiculeModule {}
