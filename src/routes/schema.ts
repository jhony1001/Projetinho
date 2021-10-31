import * as Joi from "@hapi/joi";
import { required } from "@hapi/joi";

export const joiLogin = Joi.object({
    email: Joi.string().required(),
    senha: Joi.string().required()
})

export const joiCadastro = Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().required(),
    senha: Joi.string().required(),
    cep: Joi.string().required(),
    rua: Joi.string().required(),
    bairro: Joi.string().required(),
    numero: Joi.string().required(),
    complemento: Joi.string().required(),
    telefone: Joi.string().required(),
})

export const joiAtualizarStatusPedido = 
Joi.object({
    status: Joi.string().required(),
    id:Joi.string().required()
    
    })


export const joiCadastroPedido = 
Joi.object({
    tipo_pagamento: Joi.string().required(),
    usuarios_id: Joi.string().required(),
    produtos_id:Joi.array().items({
        produto_id: Joi.string().required()  
    })


    
});

    
