import Usuarios from "../model/usuarios";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";
export default class ProdutosService extends BaseServiceSequelize<Usuarios> {
    constructor();
    protected validate(entity: Usuarios, payload: Usuarios): Promise<boolean>;
    sentitiveInfo: any;
    login(payload: any): Promise<Usuarios>;
    cadastro(payload: any): Promise<Usuarios>;
}
