import { BaseEntity } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';
export declare class Animal extends BaseEntity {
    id: number;
    nome: string;
    raca: string;
    porte: string;
    especie: string;
    sexo: string;
    idade: number;
    FK_clienteID: number | null;
    cliente: Cliente | null;
}
