import { AnimalService } from './animal.service';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    listar(): Promise<{
        title: string;
        animais: import("./animal.entity").Animal[];
    }>;
    novo(): {
        title: string;
    };
    cadastrar(dados: any): Promise<void>;
}
