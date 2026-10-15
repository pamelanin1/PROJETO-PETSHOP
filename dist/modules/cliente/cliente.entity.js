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
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const animal_entity_1 = require("../animal/animal.entity");
let Cliente = class Cliente extends typeorm_1.BaseEntity {
    clienteID;
    nome;
    telefone;
    cpf;
    endereco;
    animais;
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'clienteID' }),
    __metadata("design:type", Number)
], Cliente.prototype, "clienteID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Cliente.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 14, unique: true }),
    __metadata("design:type", String)
], Cliente.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", Object)
], Cliente.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => animal_entity_1.Animal, (animal) => animal.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "animais", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)('cliente')
], Cliente);
//# sourceMappingURL=cliente.entity.js.map