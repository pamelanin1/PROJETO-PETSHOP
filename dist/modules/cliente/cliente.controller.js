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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("./cliente.service");
const create_cliente_dto_1 = require("./dtos/create-cliente.dto");
let ClienteController = class ClienteController {
    clienteService;
    constructor(clienteService) {
        this.clienteService = clienteService;
    }
    async listar() {
        const clientes = await this.clienteService.findAll();
        return { titulo: 'Clientes', clientes };
    }
    novo() {
        return { titulo: 'Cadastrar cliente', cliente: {}, erro: null };
    }
    async cadastrar(dados, resposta) {
        if (await this.clienteService.findByCpf(dados.cpf.trim())) {
            resposta.status(409).render('cliente/formulario', {
                titulo: 'Cadastrar cliente',
                cliente: dados,
                erro: 'Esse CPF já está cadastrado.',
            });
            return;
        }
        await this.clienteService.create(dados);
        resposta.redirect('/clientes');
    }
};
exports.ClienteController = ClienteController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('cliente/index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)('novo'),
    (0, common_1.Render)('cliente/formulario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ClienteController.prototype, "novo", null);
__decorate([
    (0, common_1.Post)('novo'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto, Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "cadastrar", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [cliente_service_1.ClienteService])
], ClienteController);
//# sourceMappingURL=cliente.controller.js.map