import Pedidos from "../model/pedidos";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";
export default class PedidosService extends BaseServiceSequelize<Pedidos> {
    constructor();
    protected validate(entity: Pedidos, payload: Pedidos): Promise<boolean>;
    sentitiveInfo: any;
    listAllPedidos(): Promise<Pedidos[]>;
}
