const conn = require("./db/conn")

const Usuario = require("./models/Usuario")

async function syncDatabase() {
	try {
		await conn.sync({ force: true })
		console.log("sincronizando tabelas")
	} catch (error) {
		console.log("erro ao sincronizar: ", error)
	} finally {
		await conn.close()
		console.log("fechando conexao")
	}
}

syncDatabase()
