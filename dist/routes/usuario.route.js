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
const base_route_1 = require("xhelpers-api/lib/base-route");
const Usuario_service_1 = require("../services/Usuario.service");
const schema_1 = require("./schema");
const routeName = "usuarios";
class Usuarios extends base_route_1.default {
    constructor() {
        super(new Usuario_service_1.default(), [routeName]);
        this.route("POST", `/api/${routeName}/login`, null, false)
            .validate({ payload: schema_1.joiLogin })
            .handler((request, h, u) => __awaiter(this, void 0, void 0, function* () {
            let usuario = yield this.service.login(request.payload);
            return h.response(usuario).code(200);
        }))
            .build();
        this.route("POST", `/api/${routeName}/cadastro`, null, false)
            .validate({ payload: schema_1.joiCadastro })
            .handler((request, h, u) => __awaiter(this, void 0, void 0, function* () {
            let usuario = yield this.service.cadastro(request.payload);
            return h.response(usuario).code(200);
        }))
            .build();
    }
}
module.exports = [...new Usuarios().buildRoutes()];
//# sourceMappingURL=usuario.route.js.map