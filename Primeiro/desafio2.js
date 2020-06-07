let user = 'Vitor Lucas'

let soma = parseInt(Math.random() * 11) + 2 //2 a 12
console.log(`Valor da soma: ${soma}`)

function jogarDados() {
    return parseInt(Math.random() * 6) + 1
}

let dado = jogarDados();
console.log('1-Dado lançado: ', dado)

let dado2 = jogarDados()
console.log('2-Dado lançado: ', dado2)

if (soma == dado + dado2)
    console.log(`${user} você ganhou!!`)
else
    console.log(`Você perdeu, tente novamente!`)


