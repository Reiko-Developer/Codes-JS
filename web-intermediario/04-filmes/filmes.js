function habilita(inputId) {
    let ref

    const href = [
        "https://pt.wikipedia.org/wiki/Titanic_(filme_de_1997)",
        "https://pt.wikipedia.org/wiki/Enemy_at_the_Gates",
        "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
        "https://pt.wikipedia.org/wiki/Extraction_(Filme)"
    ]

    let idade = document.querySelector(inputId).value
    let decada

    if (idade > 30) {
        decada = "90"
        ref = 0
    }
    else
        if (idade > 20 && idade < 30) {
            decada = "00"
            ref = 1
        }
        else
            if (idade > 10 && idade < 20) {
                decada = "10"
                ref = 2
            }
            else {
                decada = "20"
                ref = 3
            }

    const lista = document.querySelectorAll("a")
    lista.forEach((elemento) => {
        elemento.style.color = "gray";
        elemento.href = "#";

        if (decada === elemento.id) {
            elemento.style.color = "blue";
            elemento.href = href[ref];
            elemento.target = "_blank";
        }

    })

}