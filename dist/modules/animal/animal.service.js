"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const animal_entity_1 = require("./animal.entity");
const cliente_service_1 = require("../cliente/cliente.service");
let AnimalService = class AnimalService {
    clienteService;
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async findAll() {
        return animal_entity_1.Animal.find({ relations: { cliente: true }, order: { id: 'DESC' } });
    }
    async create(dados) {
        const cliente = await this.clienteService.findOne(dados.clienteID);
        if (!cliente) {
            throw new common_1.NotFoundException('O cliente selecionado não existe.');
        }
        const animal = new animal_entity_1.Animal();
        animal.nome = dados.nome.trim();
        animal.raca = dados.raca.trim();
        animal.porte = dados.porte;
        animal.especie = dados.especie.trim();
        animal.sexo = dados.sexo;
        animal.idade = dados.idade;
        animal.cliente = cliente;
        return animal.save();
    }
};
exports.AnimalService = AnimalService;
exports.AnimalService = AnimalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], AnimalService);
//# sourceMappingURL=animal.service.js.map