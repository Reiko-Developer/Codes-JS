let posAlvo = 5
let pontos = 0
const numTiros = 10



for (let i = 0; i < numTiros; i++) {
    alvo = Math.round(Math.random() * 6)
    tiro = Math.round(Math.random() * 6)

    switch (diff(alvo, tiro)) { //poderis usar a função Math.abs
        case 0:
            pontos += 1500
            console.log(`Distância 0 – Acertou em cheio ! – 1.500 pontos`)
            break;

        case 1:
            pontos += 500
            console.log(`Distância 1 – Por um fio ! – 500 pontos`)
            break;

        case 2:
            pontos += 200
            console.log(`Distância 2 – Passou perto ! – 200 pontos`)
            break;

        case 3:
            pontos += 100
            console.log(`Distância 3 – Não foi tão bom ! – 100 pontos`)
            break;

        case 4:
            pontos += 20
            console.log(`Distância 4 – Essa foi longe! – 20 pontos`)
            break;

        case 5:
            console.log(`Distância 5 – Errou feio! - 0 pontos`)
            break;
    }

}

console.log("Pontuação total: ", pontos)

function diff(a1, a2) {
    if (a1 > a2)
        return (a1 - a2)
    else
        return (a2 - a1)
}