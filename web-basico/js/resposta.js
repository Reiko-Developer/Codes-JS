function responder(origem, destino) {
    let o = "#"+origem
    let d = '#'+destino

    const escolha = document.querySelector(o).value

    let resposta

    switch (escolha) {
        case "1":
            resposta = "Você curte um rockzão do bom!!"
            break;
        case "2":
            resposta = "Você curte um forrozinho hein?! E dança também?"
            break;
        case "3":
            resposta = "HUMMMM, Justin? Ta certo, também gosto :D"
            break;
        case "4":
            resposta = "Som da melancolia, Nelly... Just a dream.."
            break;

        default:
            resposta = "Digite uma resposta válida (de 1 a 4)."
            break;
    }

    const mensagem = document.querySelector(d)
    mensagem.value = resposta
}