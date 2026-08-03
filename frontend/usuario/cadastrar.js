const output = document.getElementById("output")

document.getElementById("btnCadastrar").addEventListener("click", (event) => {
	event.preventDefault()

	const reqBody = {
		nome: document.getElementById("inputNome").value,
		email: document.getElementById("inputEmail").value,
		senha: document.getElementById("inputSenha").value
	}

	fetch("http://localhost:3000/usuario", {
		headers: { "Content-Type": "application/json" },
		method: "POST",
		body: JSON.stringify(reqBody)
	})
		.then((res) => res.json())
		.then((dados) => {
			console.log(dados)
			output.innerText = "Usuario cadastrado com sucesso"
		})
		.catch((error) => {
			console.error("Erro ao cadastrar usuario: ", error)
			output.innerText = "Erro ao cadastrar usuario"
		})
})
