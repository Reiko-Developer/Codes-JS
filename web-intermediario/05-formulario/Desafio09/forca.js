let vidas = 0;
const txtVidas = document.getElementById("txt-vidas")
txtVidas.value = "" + vidas

const table = document.getElementById("table")

const palavras = [
    'mamão','Casa', 'vidro', 'cadeira', 'janela', 'manteiga', 'frango', 'ventilador',
    'carro','leite','copo','nescau','café','arroz','otorrinolaringologista','Farofa',
    'Para uma mente bem estruturada, a morte é apenas uma aventura seguinte!'
]
let palavra = palavras[0]

/**
 * Início da lógica
 */
geraPalavra() //gera automaticamente uma palavra

function geraPalavra() {
    init()

    table.deleteRow(0)

    let row = table.insertRow(0)

    for (let i = 0; i < palavra.length; i++) {
        var cell = row.insertCell(i)
        if (palavra[i] !== " ")
            cell.textContent = "*"
    }
}

function jogar(idInput) {
    if (vidas <= 1) {
        console.log("Você não tem mais vidas para poder jogar!")
        perdeu()
    }

    let acertou = false

    let input = document.querySelector(idInput)
    let letter = input.value
    if (letter == "") {
        console.log("Entre com uma letra!")
        return
    }

    let tableCells = document.querySelectorAll('td')

    for (let i = 0; i < tableCells.length; i++) {
        if (letter === palavra[i].toLowerCase()) {
            tableCells[i].textContent = letter
            acertou = true
        }
    }

    input.value = ""

    ganhou(tableCells)


    if (acertou)
        return

    --vidas

    txtVidas.value = vidas

}

function ganhou(arrayDeLetras) {
    for (let i = 0; i < arrayDeLetras.length; i++) {
        if ('*' === arrayDeLetras[i].textContent.toLowerCase()) {
            return
        }
    }

    let divWin = document.getElementById("div-win")
    divWin.textContent = "Meus parabéns, você acertou a palavra!!!"
    divWin.style.backgroundColor = "blue"
    divWin.style.textAlign = "center"

}

function perdeu() {
    let divWin = document.getElementById("div-win")
    divWin.textContent = "Ah, que pena, não foi dessa vez, tente novamente :("
    divWin.style.backgroundColor = "red"
    divWin.style.textAlign = "center"
}

function init() {
    let rand = Math.floor(Math.random() * palavras.length)
    palavra = palavras[rand]
    vidas = "10";
    txtVidas.value = "" + vidas;
    let divWin = document.getElementById("div-win")
    divWin.textContent = ""

}