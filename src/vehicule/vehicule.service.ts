import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVehiculeDto } from './dto/create-vehicule.dto.js';
import { UpdateVehiculeDto } from './dto/update-vehicule.dto.js';
import { Vehicule } from './entities/vehicule.entity.js';

@Injectable()
export class VehiculeService {
    private Vehicules : Vehicule[] =[
      {id: 1 , brand: "Tesla", price: 400 ,isElectric: true },
      {id: 2 , brand: "Ford", price: 150 ,isElectric: false },

    ];
    private nextId = 3;
  
  findAll() : Vehicule[] {
    return this.Vehicules;
  }

  findOne(id: number) : Vehicule {
    const vehicule = this.Vehicules.find((p)=> p.id === id);
    if(!vehicule){throw new NotFoundException(`Vehicule ${id} introuvable`)};
    return vehicule;
  }

  update(id: number, updateVehiculeDto: UpdateVehiculeDto) {
    return `This action updates a #${id} vehicule`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicule`;
  }
}
