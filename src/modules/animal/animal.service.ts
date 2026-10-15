import { Injectable, NotFoundException } from '@nestjs/common';
import { Animal } from './animal.entity';
import { ClienteService } from '../cliente/cliente.service';
import { CreateAnimalDto } from './dtos/create-animal.dto';

@Injectable()
export class AnimalService {
  constructor(private readonly clienteService: ClienteService) {}

  async findAll(): Promise<Animal[]> {
    // Carrega a relação para exibir o nome do dono no EJS.
    return Animal.find({ relations: { cliente: true }, order: { id: 'DESC' } });
  }

  async create(dados: CreateAnimalDto): Promise<Animal> {
    const cliente = await this.clienteService.findOne(dados.clienteID);
    if (!cliente) {
      throw new NotFoundException('O cliente selecionado não existe.');
    }

    const animal = new Animal();
    animal.nome = dados.nome.trim();
    animal.raca = dados.raca.trim();
    animal.porte = dados.porte;
    animal.especie = dados.especie.trim();
    animal.sexo = dados.sexo;
    animal.idade = dados.idade;
    animal.cliente = cliente;
    return animal.save();
  }
}
