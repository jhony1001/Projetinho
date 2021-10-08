import { Model } from "sequelize-typescript";
export default class Pedidos extends Model<Pedidos> {
    id: number;
    status: string;
    tipo_pagamento: string;
    usuarios_id: number;
}
