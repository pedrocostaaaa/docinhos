import mysql from "mysql2"
import config from "../config.js"

class categoriamodel {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }


    create(nome_categoria){
        let sql = `insert into categoria (nome_categoria) values("${nome_categoria}");`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"categoria inserida"])
            })
        });
    }

    read(){
        let sql = `select * from categorias;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_categoria,nome_categoria){
        let sql = `update categoria set nome="${nome_categoria}" where id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Atualizado"])
            })
        });
    }

    delete(id_categoria){
        let sql = `delete from categoria where id_categoria="${id_categoria}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Deletado"])
            })
        });
    }
}






export default new categoriamodel();