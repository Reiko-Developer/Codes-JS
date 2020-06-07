let meuArray = [];

for (let i = 0; i < 10; i++) {
    let valor = Math.round(Math.random() * 10 * i);
    meuArray.push(valor);
}
// Exibir os dados do Array
meuArray.forEach((elemento, indice, array) => {
    console.log(`${elemento} está no índice: ${indice}`);
    //console.log(array)
});

let meuArray2 = []
meuArray2.push([1, 2])
meuArray2.push([7, 1])
meuArray2.push([2, 3])
meuArray2.push([3, 5])
meuArray2.push([3, 4])
meuArray2.push([3, 3])
meuArray2.push([4, 3])
meuArray2.push([5, 3])

console.log("Não ordenado: ", meuArray2)

//Ordena descendentemente 1º pelo item[0] e depois por [1].
meuArray2.sort((b,a) => { return a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0] })

console.log('Ordenado: ', meuArray2)
