class Dado {

    constructor() {
        this.face = 0;
    }

    jogar() {
        this.setFace(Math.round(Math.random() * 5) + 1)
    }

    setFace(valor) {
        this.face = valor
    }

    getFace() {
        return this.face
    }
}

class Aposta {
    constructor(aposta) {
        let d1 = new Dado()
        d1.jogar()

        let d2 = new Dado()
        d2.jogar()

        this.resultado = d1.getFace() + d2.getFace()

        console.log(`Sua aposta ${aposta}: resultado ${this.resultado}`)
        if (this.resultado === aposta)
            console.log(`Parabéns, você acertou!!`)
        else
            console.log(`Ahhh, não foi dessa vez, tente novamente!`)
    }

}

let a = new Aposta(5);

