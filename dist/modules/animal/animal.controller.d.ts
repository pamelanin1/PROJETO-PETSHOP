import type { Response } from 'express';
import { AnimalService } from './animal.service';
import { ClienteService } from '../cliente/cliente.service';
import { CreateAnimalDto } from './dtos/create-animal.dto';
export declare class AnimalController {
    private readonly animalService;
    private readonly clienteService;
    constructor(animalService: AnimalService, clienteService: ClienteService);
    listar(): Promise<object>;
    novo(): Promise<object>;
    cadastrar(dados: CreateAnimalDto, resposta: Response): Promise<void>;
}
