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
exports.Animal = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../cliente/cliente.entity");
let Animal = class Animal extends typeorm_1.BaseEntity {
    id;
    nome;
    raca;
    porte;
    especie;
    sexo;
    idade;
    FK_clienteID;
    cliente;
};
exports.Animal = Animal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Animal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Animal.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Animal.prototype, "raca", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], Animal.prototype, "porte", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Animal.prototype, "especie", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20 }),
    __metadata("design:type", String)
], Animal.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Animal.prototype, "idade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'FK_clienteID', nullable: true }),
    __metadata("design:type", Object)
], Animal.prototype, "FK_clienteID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cliente_entity_1.Cliente, (cliente) => cliente.animais, {
        nullable: true,
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'FK_clienteID', referencedColumnName: 'clienteID' }),
    __metadata("design:type", Object)
], Animal.prototype, "cliente", void 0);
exports.Animal = Animal = __decorate([
    (0, typeorm_1.Entity)('animal')
], Animal);
//# sourceMappingURL=animal.entity.js.map