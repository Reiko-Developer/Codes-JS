let textos = []

function addInput(id, txt) {
    for (let i = 0; i < textos.length; i++) {
        if (id === textos[i][0])
            return
    }
    textos.push([id, txt]) //inputTxt, "nome e sobrenome"
}

function getInputTxt(id) {
    for (let i = 0; i < textos.length; i++) {
        if (id === textos[i][0])
            return textos[i][1]
    }
}

function verifica() {

    const campos = document.querySelectorAll("input")

    campos.forEach((campo) => {
        const nomeInput = "#" + campo.id;
        const nomeHelp = "#help" + campo.id.substring(3);
        const hlp = document.querySelector(nomeHelp)

        addInput(hlp.id, hlp.innerHTML)

        if (document.querySelector(nomeInput).value.length === 0) {
            hlp.innerHTML = "Campo obrigatório"
            hlp.classList.remove("text-muted")
            hlp.classList.add("text-danger")
        } else {
            let temp = getInputTxt(hlp.id)
            if(temp != undefined)
                hlp.innerHTML = getInputTxt(hlp.id)
            hlp.classList.add("text-muted")
            hlp.classList.remove("text-danger")
        }
    })

}