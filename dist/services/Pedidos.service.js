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
const pedidos_1 = require("../model/pedidos");
const base_service_sequelize_1 = require("xhelpers-api/lib/base-service-sequelize");
class PedidosService extends base_service_sequelize_1.default {
    constructor() {
        super(pedidos_1.default);
        this.sentitiveInfo = ["pedidos"];
    }
    validate(entity, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(true);
        });
    }
    listAllPedidos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findAll();
        });
    }
}
exports.default = PedidosService;
//# sourceMappingURL=Pedidos.service.js.map