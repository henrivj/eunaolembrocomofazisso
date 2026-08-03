const output = document.getElementById("output")
const errorOutput = document.getElementById("errorOutput")

fetch(`http://localhost:3000/usuario`)
	.then((res) => res.json())
	.then((dados) => {
		console.log(dados)
		output.innerHTML = ""
		errorOutput.innerText = ""

		if (dados.message) return (errorOutput.innerText = dados.message)

		dados.forEach((usuario) => {
			const { codUsuario, nome, email, senha } = usuario
			output.innerHTML += `<tr>
                        <td>${codUsuario}</td>
                        <td>${nome}</td>
                        <td>${email}</td>
                        <td>${senha}</td>
                    </tr>`
		})
	})
	.catch((error) => {
		console.error("Erro ao consultar usuario: ", error)
		errorOutput.innerText = "Erro ao consultar usuario"
	})
