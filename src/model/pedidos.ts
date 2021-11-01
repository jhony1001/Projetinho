import {Model, Scopes, Table,Column, BelongsTo, HasMany} from "sequelize-typescript";
import Usuarios from './usuarios';
import PedidoProduto from './pedido_produto';

@Scopes(() => ({}))
@Table({ tableName: "pedidos", timestamps:false })
export default class Pedidos extends Model<Pedidos>{
    
    @Column({primaryKey:true})
    id:number;
    @Column
    status:string;
    @Column
    tipo_pagamento:string;
    @Column
    usuarios_id:number;

    @BelongsTo(()=> Usuarios, 'usuarios_id')
    user:Usuarios;

    @HasMany(()=> PedidoProduto, "pedido_id")
    pedidoProduto:PedidoProduto[];
}