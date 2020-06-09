geraBotoes()

let rand = Math.floor(Math.random() * 20)
console.log(rand)

function geraBotoes() {
    const body = document.querySelector("body")

    for (let i = 1; i <= 20; i++) {
        let button = document.createElement("button")
        button.textContent = i
        button.id = i
        button.onclick = botaoClicado;

        body.appendChild(button)
    }
}

function botaoClicado() {
    if (parseInt(this.id) === rand)
        alert("Muito bem, você apertou o botão sorteado!")
    else
        alert("Que pena, tente outro botão =)")
}