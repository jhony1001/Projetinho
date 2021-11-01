import Pedidos from "../model/pedidos";
import BaseServiceSequelize from "xhelpers-api/lib/base-service-sequelize";
import { db } from "xhelpers-api/lib/db-sequelize";
import PedidoProduto from '../model/pedido_produto';
import {Op} from "sequelize";

export default class PedidosService extends BaseServiceSequelize<Pedidos> {
    constructor() {
        super(Pedidos);
    }

    protected async validate(entity: Pedidos, payload: Pedidos): Promise<boolean> {
        return Promise.resolve(true);
    }

    sentitiveInfo: any = ["pedidos"];


    async listAllPedidos(){

      return this.repository.findAll(
        {
            where:{
                status:{[Op.ne]:"Finalizado"}
            },
            include: [
                { model: db.sequelize.models.Usuarios},
                { 
                    model: db.sequelize.models.PedidoProduto,
                    include:[
                        {model: db.sequelize.models.Produtos}
                    ]
                
                }
              ]
        }        
      );
    }


    async AtualizarStatusPedido(payload:any){

        //recebido
        //preparando
        //finalizado

        await this.repository.update({status: payload.status},
            {
                where:{
                    id:payload.id
                }
            });

        
        const pedidoDB = await this.repository.findByPk(payload.id);
      return pedidoDB;
    }


    async CadastroPedidos(payload:any){

        let pedidoDB = {
            status:"recebido",
            tipo_pagamento:payload.tipo_pagamento,
            usuarios_id:payload.usuarios_id
        } 
        

        pedidoDB = await this.repository.create(pedidoDB);
        
        const pedidoId = pedidoDB["null"];

        const pedidoProdutosDB = payload.produtos_id.map((produto:any)=>{
            return{
                produto_id: produto.produto_id,
                pedido_id: pedidoId
            }
        });



        const pedidoProdutoRepository = db.sequelize.getRepository(PedidoProduto);
        
        const pedidosProdutosDB = pedidoProdutoRepository.bulkCreate(pedidoProdutosDB);

        return {
            id:pedidoId,
            status:pedidoDB.status,
            tipo_pagamento: pedidoDB.tipo_pagamento,
            usuarios_id: pedidoDB.usuarios_id,
            produtos:pedidoProdutosDB
        };

        

    }

    

}