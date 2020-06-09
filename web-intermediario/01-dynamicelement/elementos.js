const botao = document.createElement("button")
botao.textContent = "Botão de salvar"
botao.onclick = salvar;

//Para tags HTML basta informar seu nome sem o "#"
const body = document.querySelector("body")
body.appendChild(botao)

function salvar(){
    alert("Salvo.")
}