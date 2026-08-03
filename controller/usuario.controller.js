const Usuario = require("../models/Usuario")

const cadastrar = async (req, res) => {
	try {
		const { nome, email, senha } = req.body

		if (!nome || !email || !senha) return res.status(400).json({ message: "preencha todos os campos" })

		await Usuario.create({ nome, email, senha })
		res.status(201).json({ message: "usuario cadastrado com sucesso" })
	} catch (error) {
		console.error("erro ao cadastrar: ", error)
		res.status(500).json({ message: "erro ao cadastrar" })
	}
}

const consultar = async (req, res) => {
	try {
		const id = req.params.id
		const usuario = await Usuario.findByPk(id)

		if (usuario) res.status(200).json(usuario)
		else res.status(404).json({ message: "usuario nao encontrado" })
	} catch (error) {
		console.error("erro ao consultar: ", error)
		res.status(500).json({ message: "erro ao consultar" })
	}
}

const listar = async (req, res) => {
	try {
		const usuarios = await Usuario.findAll()
		res.status(200).json(usuarios)
	} catch (error) {
		console.error("erro ao listar: ", error)
		res.status(500).json({ message: "erro ao listar" })
	}
}

module.exports = { cadastrar, consultar, listar }
