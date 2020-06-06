let nome = "Vitor Lucas"
let produto = "Mouse"
let preco = 100
let desconto = 7

console.log(`Oi ${nome}`)
console.log(`Você comprou: ${produto}`)
console.log(`Custou: ${preco}`)
console.log(`Desconto (%): ${desconto}`)

let descontoCalculado = (preco*desconto)/100

let precoFinal = preco-descontoCalculado

console.log(`Preço final: ${precoFinal}`)