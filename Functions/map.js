let meuArray = [[3, 1000, "Lucas"], [2, 2000, "Eli"], [3, 3000, "Duda"], [4, 1500, "Maria"], [8, 5000, "Andrea"]]

console.log('===================================')
console.log(`         Salários originais         `)
console.log(meuArray)

//e[0] ano de serviços e[1] salário
meuArray.map(ajustaSalario)

function ajustaSalario(e) {
    if (e[0] < 3)
        return e
    if (e[0] > 7)
        return e[1] += e[1] * 0.3
    return e[1] += e[1] * 0.05 * (e[0] - 2)
}

meuArray = meuArray.sort((a, b) => {
    return b[1] - a[1]
})

console.log('===================================')
console.log('          Ajuste Salarial          ')
console.log(meuArray)

//o ", 0) que é o segundo argumento, inicializa o acumulador"
const folhaDePagamento = meuArray.reduce(function (acumula, b) { return acumula + b[1] }, 0)

console.log("....................................")
console.log('"Folha de Pagamento')
console.log(folhaDePagamento)

//retorna todos os funcionários que tem anos pares de serviço
let pagamentosAnosPares = meuArray.filter((el) => { if (el[0] % 2 === 0) { return el[0] } })
console.log("Pagamentos pares:", pagamentosAnosPares)

console.log("Soma dos pagamentos de funcionários com anos pares de serviço: ")
let aaa = pagamentosAnosPares.reduce((a, element) => { return a + element[1] }, 0)

console.log(aaa)

let nomes = meuArray.filter((el) => { return el[2] += " :D" })
console.log("Nomes:", nomes)