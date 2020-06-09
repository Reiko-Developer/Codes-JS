let intervalo
let comecou = false;


function contagem(node, label, m) {

    // Ativa a barra de progresso no primeiro caractere
    if (!comecou)
        intervalo = setInterval(progride, 300)

    label = "#" + label

    const lbl = document.querySelector(label)
    lbl.textContent = node.value.length

    m = '#' + m
    const meter = document.querySelector(m)
    meter.value = node.value.length


}

function progride() {
    const barra = document.querySelector("#idPB")
    barra.value++;

    if (barra.value >= 100) {
        const texto = document.querySelector("#idTxt")
        texto.readOnly = true
        window.clearInterval(intervalo)

        const dialog = document.querySelector("#idDialog")
        dialog.open = true

    }
}