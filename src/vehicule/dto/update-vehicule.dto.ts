import { PartialType } from '@nestjs/mapped-types';
import { CreateVehiculeDto } from './create-vehicule.dto.js';

export class UpdateVehiculeDto extends PartialType(CreateVehiculeDto) {}
