import { Animal } from './animal.entity';
export declare class AnimalService {
    findAll(): Promise<Animal[]>;
    create(dados: Partial<Animal>): Promise<Animal>;
}
