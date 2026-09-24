import { Injectable } from '@nestjs/common';
import { Animal } from './animal.entity';

@Injectable()
export class AnimalService {
  async findAll(): Promise<Animal[]> {
    return await Animal.find({ order: { id: 'DESC' } });
  }

  async create(dados: Partial<Animal>): Promise<Animal> {
    const animal = new Animal();

  Object.assign(animal, dados);

  await animal.save();

  return animal;
  }
}
