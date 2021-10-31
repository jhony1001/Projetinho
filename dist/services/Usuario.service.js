"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuarios_1 = require("../model/usuarios");
const base_service_sequelize_1 = require("xhelpers-api/lib/base-service-sequelize");
const bcrypt = require("bcrypt");
class ProdutosService extends base_service_sequelize_1.default {
    constructor() {
        super(usuarios_1.default);
        this.sentitiveInfo = ["Usuarios"];
    }
    validate(entity, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(true);
        });
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOne({
                where: {
                    email: payload.email
                }
            });
            if (!user) {
                throw "Usuário ou Senha não conferem";
            }
            const match = yield bcrypt.compare(payload.senha, user.senha);
            if (match) {
                return user;
            }
            throw "Usuário ou Senha não conferem";
        });
    }
    cadastro(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = bcrypt.hashSync(payload.senha, 10);
            payload.senha = hash;
            let user = yield this.repository.create(payload);
            return user;
        });
    }
}
exports.default = ProdutosService;
//# sourceMappingURL=Usuario.service.js.map