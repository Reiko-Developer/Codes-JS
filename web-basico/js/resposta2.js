function responder(origem, destino) {
    let o = "#" + origem
    let d = '#' + destino

    const sel = document.querySelector(o)
    const escolha = sel[sel.selectedIndex].value
    let resposta

    switch (escolha) {
        case "1":
            resposta = "Você curte um rockzão do bom!!"
            break;
        case "2":
            resposta = "Você curte um forrozinho hein?! E dança também?"
            break;
        default:
            resposta = "HUMMMM, Justin? Ta certo, também gosto :D"
            break;
    }

    const mensagem = document.querySelector(d)
    mensagem.textContent = resposta
}