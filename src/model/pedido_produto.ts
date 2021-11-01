import {Model, Scopes, Table,Column, BelongsTo} from "sequelize-typescript";
import Produtos from "./produtos";

@Scopes(() => ({}))
@Table({ tableName: "pedido_produto", timestamps:false })
export default class PedidoProduto extends Model<PedidoProduto>{
    
    @Column({primaryKey:true})
    id:number;
    @Column
    produto_id:number;
    @Column
    pedido_id:number;

    @BelongsTo(()=> Produtos, 'produto_id')
    produtos:Produtos;

}
