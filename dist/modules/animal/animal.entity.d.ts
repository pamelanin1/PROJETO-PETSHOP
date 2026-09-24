import { BaseEntity } from 'typeorm';
export declare class Animal extends BaseEntity {
    id: number;
    nome: string;
    raca: string;
    porte: string;
    especie: string;
    sexo: string;
    idade: number;
}
