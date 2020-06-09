class Baralho {
    constructor() {
        this.cartas = []
        this.geraBaralho()
    }

    geraBaralho() {
        // let indiceNaipe = Math.round(Math.random() * 3)
        // let indiceCarta = Math.round(Math.random() * 12)
        // this.cartaAleatoria = [indiceNaipe,indiceCarta]
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                this.cartas.push(new Carta(i, j+1))
            }
        }
    }

    embaralhar() {
        let baralhoEspelho = this.cartas
        let cartasEmbaralhadas = []
        let size = 52;
        for (let i = 0; i < 52; i++) {
            let aux = Math.floor(Math.random() * size) //gera cartas aleatórias de 0 a 12
            cartasEmbaralhadas.push(baralhoEspelho.splice(aux, 1))
            --size
        }

        this.cartas = cartasEmbaralhadas
        return this.cartas
    }

    getCarta(indice) {
        return this.cartas[indice]
    }

    getCartas() {
        return this.cartas
    }

    toString() {
        let str = ""
        for (let i = 0; i < this.cartas.length; i++) {
            str += this.cartas[i] + '\n'
        }
        return str
    }
}

class Carta {
    constructor(naipe, num) {
        this.naipe = naipe
        this.numero = num
    }

    igual(carta) {
        if (carta.getNumero() === this.getNumero() && carta.getNaipe() === this.getNaipe())
            return true
        else
            return false
    }

    setNaipe(naipe) {
        if (naipe > -1 && naipe < 4)
            this.naipe = naipe;
        else
            console.error("erro ao setar o naipe da carta.")
    }

    setNumero(numero) {
        if (numero > -1 && numero < 13)
            this.naipe = numero;
        else
            console.error("erro ao setar o número da carta.")
    }

    getNumero() {
        return this.numero
    }

    getNaipe() {
        return this.naipe
    }

    toString() {
        let tmp = ""

        switch (this.numero) {
            case 1:
                tmp += "Ás"
                break;
            case 11:
                tmp += "Valete"
                break;
            case 12:
                tmp += "Rainha"
                break;
            case 13:
                tmp += "Rei"
                break;
            default:
                tmp += this.numero
                break;
        }

        tmp += " de "
        switch (this.naipe) {
            case 0:
                tmp += "paus"
                break;
            case 1:
                tmp += "copas"
                break;
            case 2:
                tmp += "espadas"
                break;
            default:
                tmp += "ouros"
                break;
        }

        return tmp;

    }
}

class Aposta {

    constructor() {
        this.cartaGerada
        this.baralho = new Baralho()
        this.geraCarta()

    }

    geraCarta() {
        let aux = Math.floor(Math.random() * 51)
        this.cartaGerada = this.baralho.getCarta(aux)
    }

    getCartaGerada() {
        return this.cartaGerada
    }

    cartasIguais(carta) {

        console.log("Carta gerada: ", this.cartaGerada.toString())
        console.log("Carta da aposta: ", carta.toString())

        if (carta.igual(this.cartaGerada)) {
            console.log(`Parabéns você acertou a carta pedida pelo sistema.!`)
            console.log("=================================================")
            return true
        }
        else {
            console.log("Não foi dessa vez, tente novamente.")
            console.log("=================================================")
            return false
        }
    }

}

aposta = new Aposta()

let carta = new Carta(2, 11)

let aux = 0
while (true) {
    console.log(++aux)
    if (aposta.cartasIguais(carta))
        break;
    else
        aposta.geraCarta()
}