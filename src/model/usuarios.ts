import {Model, Scopes, Table,Column, DataType} from "sequelize-typescript"
@Scopes(() => ({}))
@Table({ tableName: "usuarios", timestamps:false })
export default class Usuarios extends Model<Usuarios>{
    
    @Column({primaryKey:true, type: DataType.INTEGER})
    id:number;
    @Column
    nome:string;
    @Column
    senha:string;
    @Column
    cep:string;
    @Column
    rua:string;
    @Column
    bairro:string;
    @Column
    numero:string;
    @Column
    complemento:string;
    @Column
    email:string;
    @Column
    telefone:string;

    



}

