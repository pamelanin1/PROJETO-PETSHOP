"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const cliente_entity_1 = require("./cliente.entity");
let ClienteService = class ClienteService {
    async findAll() {
        return cliente_entity_1.Cliente.find({ order: { clienteID: 'DESC' } });
    }
    async findAllByName() {
        return cliente_entity_1.Cliente.find({ order: { nome: 'ASC' } });
    }
    async findOne(clienteID) {
        return cliente_entity_1.Cliente.findOneBy({ clienteID });
    }
    async findByCpf(cpf) {
        return cliente_entity_1.Cliente.findOneBy({ cpf });
    }
    async create(dados) {
        const cliente = new cliente_entity_1.Cliente();
        cliente.nome = dados.nome.trim();
        cliente.telefone = dados.telefone?.trim() || null;
        cliente.cpf = dados.cpf.trim();
        cliente.endereco = dados.endereco?.trim() || null;
        return cliente.save();
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)()
], ClienteService);
//# sourceMappingURL=cliente.service.js.map