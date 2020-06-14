let guardaCor;
let mudou = false;

function mudaFundo(div, cxDeTexto, cor) {
    const pesquisa = document.querySelector(cxDeTexto).value;
    const conteudoDiv = div.textContent;

    if (conteudoDiv.indexOf(pesquisa) > 0) {
        guardaCor = div.style.backgroundColor;
        div.style.backgroundColor = cor;
        mudou = true;
    }
}

function voltaFundo(elemento) {
    if (mudou) {
        elemento.style.backgroundColor = guardaCor;
        mudou = false;
    }

}

