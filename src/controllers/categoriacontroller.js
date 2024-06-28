import categoriamodel from "../models/categoriamodel.js";

class categoriacontroller{
    constructor(){


    }

    create(req,res){
        const nome_categoria = req.body.nome_categoria
        categoriamodel.create(nome_categoria).then(
            resposta =>{
                console.debug("cadastrando uma categoria")
                res.status(resposta[0].json(resposta[1]))
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    read(req,res){
        categoriamodel.create().then(
            resposta =>{
                console.debug("Exibindo categoria")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro exibindo categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    update(req,res){
        const id_categoria = req.params.id_categoria
        const nome_categoria = req.body.nome_categoria
        categoriamodel.update(id_categoria,nome_categoria).then(
            resposta =>{
                console.debug("Atualizando categoria")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro atualizando categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    delete(req,res){
        const id_categoria = req.params.id_categoria
        categoriamodel.update(id_categoria).then(
            resposta =>{
                console.debug("Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }

        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Deletando categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new categoriacontroller()