import Pedidos from "../model/pedidos";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";

export default class PedidosService extends BaseServiceSequelize<Pedidos> {
    constructor() {
        super(Pedidos);
    }

    protected async validate(entity: Pedidos, payload: Pedidos): Promise<boolean> {
        return Promise.resolve(true);
    }

    sentitiveInfo: any = ["pedidos"];


    async listAllPedidos(){
      return this.repository.findAll();
    }

}