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
const sequelize_typescript_1 = require("sequelize-typescript");
let Usuarios = (() => {
    let Usuarios = class Usuarios extends sequelize_typescript_1.Model {
    };
    __decorate([
        sequelize_typescript_1.Column({ primaryKey: true, type: sequelize_typescript_1.DataType.INTEGER }),
        __metadata("design:type", Number)
    ], Usuarios.prototype, "id", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "nome", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "senha", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "cep", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "rua", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "bairro", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "numero", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "complemento", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "email", void 0);
    __decorate([
        sequelize_typescript_1.Column,
        __metadata("design:type", String)
    ], Usuarios.prototype, "telefone", void 0);
    Usuarios = __decorate([
        sequelize_typescript_1.Scopes(() => ({})),
        sequelize_typescript_1.Table({ tableName: "usuarios", timestamps: false })
    ], Usuarios);
    return Usuarios;
})();
exports.default = Usuarios;
//# sourceMappingURL=usuarios.js.map