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
const db_sequelize_1 = require("xhelpers-api/lib/db-sequelize");
const pedido_produto_1 = require("../model/pedido_produto");
const sequelize_1 = require("sequelize");
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
            return this.repository.findAll({
                where: {
                    status: { [sequelize_1.Op.ne]: "Finalizado" }
                }
            });
        });
    }
    AtualizarStatusPedido(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update({ status: payload.status }, {
                where: {
                    id: payload.id
                }
            });
            const pedidoDB = yield this.repository.findByPk(payload.id);
            return pedidoDB;
        });
    }
    CadastroPedidos(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let pedidoDB = {
                status: "recebido",
                tipo_pagamento: payload.tipo_pagamento,
                usuarios_id: payload.usuarios_id
            };
            pedidoDB = yield this.repository.create(pedidoDB);
            const pedidoId = pedidoDB["null"];
            const pedidoProdutosDB = payload.produtos_id.map((produto) => {
                return {
                    produto_id: produto.produto_id,
                    pedido_id: pedidoId
                };
            });
            const pedidoProdutoRepository = db_sequelize_1.db.sequelize.getRepository(pedido_produto_1.default);
            const pedidosProdutosDB = pedidoProdutoRepository.bulkCreate(pedidoProdutosDB);
            return {
                id: pedidoId,
                status: pedidoDB.status,
                tipo_pagamento: pedidoDB.tipo_pagamento,
                usuarios_id: pedidoDB.usuarios_id,
                produtos: pedidoProdutosDB
            };
        });
    }
}
exports.default = PedidosService;
//# sourceMappingURL=Pedidos.service.js.map