let times = ['Grêmio', "Palmeiras", "Flamengo", "Corinthians", "Vasco", "Inter","São Paulo", "Cruzeiro"]

times.push("Curitiba")
times.push("Paraná")

for (const time of times) {
    console.log(time)
}

times.pop()//remove o último elemento inserido na lista
console.log(times.indexOf("Paraná"))

times.sort(); //times.reverse();
console.log(times)

let names = 'Vitor Lucas Pires'.split(" ")//separa a string e armazena em um array
names = names.concat(times) //Une dois ou mais arrays
console.log(names)

console.log(names.join());

predio=[];  
predio.push(["Carlos", "Clarice"]);
predio.push(["Adélia", "Cora"]);
predio.push(["Hilda", "Cecília"]);

console.log(predio[1][0])

array = [
    ['SCRPT', 3],
    ['HTML', 7],
    ['Duda', 6],
    ['Andrea',3]
]

tmp = 'Duda'

for (let i = 0; i < array.length; i++) {
    if (array[i][0] === tmp){
        array[i][1] += 1
    }
}

console.log(array)