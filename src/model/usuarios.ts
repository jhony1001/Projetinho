import {Model, Scopes, Table,Column} from "sequelize-typescript"
@Scopes(() => ({}))
@Table({ tableName: "usuarios" })
export default class Usuarios extends Model<Usuarios>{
    
    @Column({primaryKey:true})
    id:number;
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

