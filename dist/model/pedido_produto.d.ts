import { Model } from "sequelize-typescript";
export default class PedidoProduto extends Model<PedidoProduto> {
    id: number;
    produto_id: number;
    pedido_id: number;
}
