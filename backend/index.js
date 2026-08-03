const express = require("express")
const cors = require("cors")
const app = express()

const host = "localhost"
const port = 3000

const usuarioController = require("./controller/usuario.controller")

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// server
app.listen(port, host, () => {
	console.log(`servidor rodando em: http://${host}:${port}`)
})

// routes
app.get("/", (req, res) => res.status(200).json({ message: "ok" }))

app.get("/usuario/:id", usuarioController.consultar)
app.get("/usuario", usuarioController.listar)
app.post("/usuario", usuarioController.cadastrar)
