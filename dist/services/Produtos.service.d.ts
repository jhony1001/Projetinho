import Produtos from "../model/produtos";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";
export default class ProdutosService extends BaseServiceSequelize<Produtos> {
    constructor();
    protected validate(entity: Produtos, payload: Produtos): Promise<boolean>;
    sentitiveInfo: any;
    listAllprodutos(): Promise<Produtos[]>;
}
