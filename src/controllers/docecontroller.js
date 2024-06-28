import docemodel from "../models/docemodel.js";

class docecontroller{
    constructor(){


    }

    create(req,res){
        const nome_doce = req.body.nome_categoria
        docemodel.create(id_doce).then(
            resposta =>{
                console.debug("cadastrando um doce")
                res.status(resposta[0].json(resposta[1]))
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando um doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        docemodel.create().then(
            resposta =>{
                console.debug("Exibindo doces")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro exibir doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_doce = req.params.id_doce
        const nome_doce = req.body.nome_doce
        docemodel.update(id_categoria,nome_doce).then(
            resposta =>{
                console.debug("Atualizando doces")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro atualizando doces")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_doce = req.params.id_doce
        docemodel.update(id_doce).then(
            resposta =>{
                console.debug("Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Deletando doce")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new docecontroller()