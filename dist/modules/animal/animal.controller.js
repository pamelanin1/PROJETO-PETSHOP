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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const animal_service_1 = require("./animal.service");
let AnimalController = class AnimalController {
    animalService;
    constructor(animalService) {
        this.animalService = animalService;
    }
    async listar() {
        const animais = await this.animalService.findAll();
        return { title: 'Animais', animais };
    }
    novo() {
        return { title: 'Cadastrar animal' };
    }
    async cadastrar(dados) {
        await this.animalService.create({
            nome: dados.nome,
            raca: dados.raca,
            porte: dados.porte,
            especie: dados.especie,
            sexo: dados.sexo,
            idade: Number(dados.idade),
        });
    }
};
exports.AnimalController = AnimalController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('animal/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('animal/novo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnimalController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Redirect)('/animais'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "cadastrar", null);
exports.AnimalController = AnimalController = __decorate([
    (0, common_1.Controller)('animais'),
    __metadata("design:paramtypes", [animal_service_1.AnimalService])
], AnimalController);
//# sourceMappingURL=animal.controller.js.map