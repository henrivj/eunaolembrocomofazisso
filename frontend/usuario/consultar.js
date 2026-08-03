const inputId = document.getElementById("inputId")
const output = document.getElementById("output")
const errorOutput = document.getElementById("errorOutput")

document.getElementById("btnConsultar").addEventListener("click", (event) => {
	event.preventDefault()

	const id = inputId.value
	if (!id) return (errorOutput.innerText = "Insira um ID para consultar o usuario")

	fetch(`http://localhost:3000/usuario/${id}`)
		.then((res) => res.json())
		.then((dados) => {
			console.log(dados)
			output.innerHTML = ""
			errorOutput.innerText = ""

			const { codUsuario, nome, email, senha } = dados
			if (!codUsuario) return (errorOutput.innerText = dados.message)

			output.innerHTML = `
                <tr>
                    <td>${codUsuario}</td>
                    <td>${nome}</td>
                    <td>${email}</td>
                    <td>${senha}</td>
                </tr>`
		})
		.catch((error) => {
			console.error("Erro ao consultar usuario: ", error)
			errorOutput.innerText = "Erro ao consultar usuario"
		})
})
