import { Injectable } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dtos/create-cliente.dto';

@Injectable()
export class ClienteService {
  async findAll(): Promise<Cliente[]> {
    return Cliente.find({ order: { clienteID: 'DESC' } });
  }

  async findAllByName(): Promise<Cliente[]> {
    return Cliente.find({ order: { nome: 'ASC' } });
  }

  async findOne(clienteID: number): Promise<Cliente | null> {
    return Cliente.findOneBy({ clienteID });
  }

  async findByCpf(cpf: string): Promise<Cliente | null> {
    return Cliente.findOneBy({ cpf });
  }

  async create(dados: CreateClienteDto): Promise<Cliente> {
    
    const cliente = new Cliente();
    cliente.nome = dados.nome.trim();
    cliente.telefone = dados.telefone?.trim() || null;
    cliente.cpf = dados.cpf.trim();
    cliente.endereco = dados.endereco?.trim() || null;
    return cliente.save();
  }
}
