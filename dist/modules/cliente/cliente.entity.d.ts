import { BaseEntity } from 'typeorm';
import { Animal } from '../animal/animal.entity';
export declare class Cliente extends BaseEntity {
    clienteID: number;
    nome: string;
    telefone: string | null;
    cpf: string;
    endereco: string | null;
    animais: Animal[];
}
