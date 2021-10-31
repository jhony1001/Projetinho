import Usuarios from "../model/usuarios";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";
import bcrypt = require("bcrypt");

export default class ProdutosService extends BaseServiceSequelize<Usuarios> {
    constructor() {
        super(Usuarios);
    }

    protected async validate(entity: Usuarios, payload: Usuarios): Promise<boolean> {
        return Promise.resolve(true);
    }

    sentitiveInfo: any = ["Usuarios"];


    async login(payload:any){
       const user = await this.repository.findOne({
          where:{
              email:payload.email
          }
        });

        if(!user){
            throw "Usuário ou Senha não conferem";
        }
        
        const match = await bcrypt.compare(payload.senha, user.senha);

        if(match){
            return user;
        }

        throw "Usuário ou Senha não conferem";
    }

    async cadastro(payload:any){

        const hash = bcrypt.hashSync(payload.senha, 10);

        payload.senha = hash;

        let user = await this.repository.create(payload);

        return user;
    }

}