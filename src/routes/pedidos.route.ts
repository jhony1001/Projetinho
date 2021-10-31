import * as Boom from "@hapi/boom";
import { isSchema } from "@hapi/joi";
import BaseRoute from "xhelpers-api/lib/base-route";
import Service from "../services/Pedidos.service";
import {joiCadastroPedido,joiAtualizarStatusPedido} from "./schema";

const routeName = "pedidos"

class Pedidos extends BaseRoute<Service> {
  constructor() {
    super(new Service(), [routeName]);

    this.route("GET", `/api/${routeName}`, null, false)
      .handler(async (r, h, u) => {
        let produtos = await this.service.listAllPedidos();
        return h.response(produtos).code(200);
      })
      .build();   

      this.route("PUT", `/api/${routeName}/update`, null, false)
      .validate({ payload: joiAtualizarStatusPedido })
        .handler(async (request, h, u) => {
          let pedido = await this.service.AtualizarStatusPedido(request.payload);
          return h.response(pedido).code(200);
        })
        .build();

      this.route("POST", `/api/${routeName}/create`, null, false)
    .validate({ payload: joiCadastroPedido })
      .handler(async (request, h, u) => {
        let pedido = await this.service.CadastroPedidos(request.payload);
        return h.response(pedido).code(200);
      })
      .build();   
  }
}

module.exports = [...new Pedidos().buildRoutes()];