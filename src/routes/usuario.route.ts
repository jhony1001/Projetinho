import * as Boom from "@hapi/boom";
import BaseRoute from "xhelpers-api/lib/base-route";
import Service from "../services/Usuario.service";
import {joiLogin,joiCadastro} from './schema'; 

const routeName = "usuarios"

class Usuarios extends BaseRoute<Service> {
  constructor() {
    super(new Service(), [routeName]);

    this.route("POST", `/api/${routeName}/login`, null, false)
    .validate({ payload: joiLogin })
      .handler(async (request, h, u) => {
        let usuario = await this.service.login(request.payload);
        return h.response(usuario).code(200);
      })
      .build();   

      this.route("POST", `/api/${routeName}/cadastro`, null, false)
    .validate({ payload: joiCadastro })
      .handler(async (request, h, u) => {
        let usuario = await this.service.cadastro(request.payload);
        return h.response(usuario).code(200);
      })
      .build();   
  }
}

module.exports = [...new Usuarios().buildRoutes()];