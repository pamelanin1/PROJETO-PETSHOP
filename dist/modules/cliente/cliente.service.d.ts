import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dtos/create-cliente.dto';
export declare class ClienteService {
    findAll(): Promise<Cliente[]>;
    findAllByName(): Promise<Cliente[]>;
    findOne(clienteID: number): Promise<Cliente | null>;
    findByCpf(cpf: string): Promise<Cliente | null>;
    create(dados: CreateClienteDto): Promise<Cliente>;
}
