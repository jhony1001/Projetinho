import Produtos from "../model/produtos";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";

export default class ProdutosService extends BaseServiceSequelize<Produtos> {
    constructor() {
        super(Produtos);
    }

    protected async validate(entity: Produtos, payload: Produtos): Promise<boolean> {
        return Promise.resolve(true);
    }

    sentitiveInfo: any = ["Produtos"];


    async listAllprodutos(){
      return this.repository.findAll();
    }

}