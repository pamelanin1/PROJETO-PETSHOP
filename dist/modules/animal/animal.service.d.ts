import { Animal } from './animal.entity';
import { ClienteService } from '../cliente/cliente.service';
import { CreateAnimalDto } from './dtos/create-animal.dto';
export declare class AnimalService {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    findAll(): Promise<Animal[]>;
    create(dados: CreateAnimalDto): Promise<Animal>;
}
