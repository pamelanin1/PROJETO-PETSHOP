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
const cliente_service_1 = require("../cliente/cliente.service");
const create_animal_dto_1 = require("./dtos/create-animal.dto");
let AnimalController = class AnimalController {
    animalService;
    clienteService;
    constructor(animalService, clienteService) {
        this.animalService = animalService;
        this.clienteService = clienteService;
    }
    async listar() {
        const animais = await this.animalService.findAll();
        return { titulo: 'Animais', animais };
    }
    async novo() {
        const clientes = await this.clienteService.findAllByName();
        return { titulo: 'Cadastrar animal', animal: {}, clientes, erro: null };
    }
    async cadastrar(dados, resposta) {
        try {
            await this.animalService.create(dados);
            resposta.redirect('/animais');
        }
        catch (erro) {
            if (erro instanceof common_1.NotFoundException) {
                resposta.status(400).render('animal/formulario', {
                    titulo: 'Cadastrar animal',
                    animal: dados,
                    clientes: await this.clienteService.findAllByName(),
                    erro: 'O dono selecionado não foi encontrado. Cadastre ou selecione outro cliente.',
                });
                return;
            }
            throw erro;
        }
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
    (0, common_1.Render)('animal/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)('novo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto, Object]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "cadastrar", null);
exports.AnimalController = AnimalController = __decorate([
    (0, common_1.Controller)('animais'),
    __metadata("design:paramtypes", [animal_service_1.AnimalService,
        cliente_service_1.ClienteService])
], AnimalController);
//# sourceMappingURL=animal.controller.js.map