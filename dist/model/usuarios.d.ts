import { Model } from "sequelize-typescript";
export default class Usuarios extends Model<Usuarios> {
    id: number;
    senha: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento: string;
    email: string;
    telefone: string;
}