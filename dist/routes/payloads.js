"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiCadastro = exports.joiLogin = void 0;
const Joi = require("@hapi/joi");
exports.joiLogin = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required()
});
exports.joiCadastro = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    senha: Joi.string().required(),
    cep: Joi.string().required(),
    rua: Joi.string().required(),
    bairro: Joi.string().required(),
    numero: Joi.string().required(),
    complemento: Joi.string().required(),
    telefone: Joi.string().required(),
});
//# sourceMappingURL=payloads.js.map