

let a = "10"
let b = 10
let c = 10
let d = a * c
let emAberto

console.log(d)

console.log(typeof (a))
console.log(typeof (c))
console.log(typeof (d))
console.log(typeof (emAberto))


let junta = a + c.toString()
console.log(junta)

emAberto = parseInt(a) + parseInt(c)
console.log(emAberto)


console.log(`

Logs de BOOLEAN

`)

console.log(a == b) //"10" = 10
console.log(b == c) //10 = 10

console.log(a === b) //"10" = 10
console.log(b === c) //10 = 10

let iso = "10"
let iso2 = 10

let r1 = iso == iso2
let r2 = iso === iso2
let r3 = iso = !iso2
let r4 = iso == !iso2

console.log('r1', r1)
console.log('r2', r2)
console.log('r3', r3)
console.log('r4', r4)

let sol = true;
let brinco = false;

console.log(`Está fazendo sol e estou brincando: ${Boolean(sol && brinco)}`);
console.log(`Está fazendo sol ou estou brincando: ${Boolean(sol || brinco)}`);

console.log(`Está fazendo sol: ${!sol}`);

//Imprime valores aleatório entre 0 e 1 com, até, duas casas decimais
let resposta = Math.random() * 10 > 5 ? "Sim" : "não"
console.log('Operador ternário:', resposta)


switch (4) {
    case 1:
        console.log("Deu 1")
        break;
    case 2:
        console.log("Deu 2")
        break;

    default:
        console.log('Switch:', "Resultado padrão")
}