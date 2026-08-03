const { DataTypes } = require("sequelize")
const conn = require("../db/conn")

const Usuario = conn.define(
	"Usuario",
	{
		codUsuario: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: "usuarios",
		timestamps: false
	}
)

module.exports = Usuario
