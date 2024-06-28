import express from "express"
import categoriacontroller from "./controllers/categoriacontroller.js"

import docecontroller from "./controllers/docecontroller.js"


const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("servidor funcionando")
})

server.post("/categoria",categoriacontroller.create)
server.get("/categoria",categoriacontroller.read)
server.put("/categoria/:id_categoria",categoriacontroller.update)
server.delete("/categoria/:id_categoria",categoriacontroller.delete)

server.post("/doces",docecontroller.create)
server.get("/doces",docecontroller.read)
server.put("/doces/:id_categoria",docecontroller.update)
server.delete("/doces/:id_doce",docecontroller.delete)

server.listen(5000)