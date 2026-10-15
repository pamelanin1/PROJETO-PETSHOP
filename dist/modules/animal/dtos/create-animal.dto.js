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
exports.CreateAnimalDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateAnimalDto {
    nome;
    raca;
    porte;
    especie;
    sexo;
    idade;
    clienteID;
}
exports.CreateAnimalDto = CreateAnimalDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe o nome do animal.' }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAnimalDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe a raça.' }),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateAnimalDto.prototype, "raca", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['Pequeno', 'Médio', 'Grande']),
    __metadata("design:type", String)
], CreateAnimalDto.prototype, "porte", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Informe a espécie.' }),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateAnimalDto.prototype, "especie", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['Macho', 'Fêmea']),
    __metadata("design:type", String)
], CreateAnimalDto.prototype, "sexo", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'A idade deve ser um número inteiro.' }),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateAnimalDto.prototype, "idade", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)({ message: 'Selecione um cliente cadastrado.' }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateAnimalDto.prototype, "clienteID", void 0);
//# sourceMappingURL=create-animal.dto.js.map