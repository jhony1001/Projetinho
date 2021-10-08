import * as Boom from "@hapi/boom";


import BaseRoute from "xhelpers-api/lib/base-route";

class Routes extends BaseRoute<any> {
  constructor() {
    super( ["Pedidos"]);

    this.route("GET", `/api/pedidos`, null, false)
      
      .handler(async (r, h, u) => {
        return h.response("{pedidos:[]}").code(200);
      })
      .build();
  }
}

module.exports = [...new Routes().buildRoutes()];