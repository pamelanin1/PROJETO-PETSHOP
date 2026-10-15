import type { Response } from 'express';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dtos/create-cliente.dto';
export declare class ClienteController {
    private readonly clienteService;
    constructor(clienteService: ClienteService);
    listar(): Promise<object>;
    novo(): object;
    cadastrar(dados: CreateClienteDto, resposta: Response): Promise<void>;
}
