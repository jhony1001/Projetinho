import * as Boom from "@hapi/boom";
import BaseRoute from "xhelpers-api/lib/base-route";
import Service from "../services/Pedidos.service";

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
  }
}

module.exports = [...new Pedidos().buildRoutes()];