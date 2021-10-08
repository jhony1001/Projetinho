import {Model, Scopes, Table,Column} from "sequelize-typescript"
@Scopes(() => ({}))
@Table({ tableName: "produtos", timestamps:false})
export default class Produtos extends Model<Produtos>{
    
    @Column({primaryKey:true})
    id:number;
    @Column
    nome:string;
    @Column
    preco:number;
    @Column
    descricao:string;
    @Column
    imagem:string;
    @Column
    tipo:string;
}