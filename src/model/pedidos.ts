import {Model, Scopes, Table,Column} from "sequelize-typescript";

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
}