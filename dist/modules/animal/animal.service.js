"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const animal_entity_1 = require("./animal.entity");
let AnimalService = class AnimalService {
    async findAll() {
        return await animal_entity_1.Animal.find({ order: { id: 'DESC' } });
    }
    async create(dados) {
        const animal = new animal_entity_1.Animal();
        Object.assign(animal, dados);
        await animal.save();
        return animal;
    }
};
exports.AnimalService = AnimalService;
exports.AnimalService = AnimalService = __decorate([
    (0, common_1.Injectable)()
], AnimalService);
//# sourceMappingURL=animal.service.js.map