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
const Produtos_service_1 = require("../services/Produtos.service");
const routeName = "produtos";
class Pedidos extends base_route_1.default {
    constructor() {
        super(new Produtos_service_1.default(), [routeName]);
        this.route("GET", `/api/${routeName}`, null, false)
            .handler((r, h, u) => __awaiter(this, void 0, void 0, function* () {
            let produtos = yield this.service.listAllprodutos();
            return h.response(produtos).code(200);
        }))
            .build();
    }
}
module.exports = [...new Pedidos().buildRoutes()];
//# sourceMappingURL=produtos.route.js.map