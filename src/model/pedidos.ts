import {Model, Scopes, Table,Column} from "sequelize-typescript"
@Scopes(() => ({}))
@Table({ tableName: "pedidos" })
export default class Pedidos extends Model<Pedidos>{
    
    @Column({primaryKey:true})
    id:number;
    @Column
    status:string;
    @Column
    tipo_pagamengo:string;
    @Column
    usuarios_id:number;

   

    



}