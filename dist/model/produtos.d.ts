import { Model } from "sequelize-typescript";
export default class Produtos extends Model<Produtos> {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    imagem: string;
    tipo: string;
}
