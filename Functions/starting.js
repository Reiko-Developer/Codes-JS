string = ' Com espaço '
string.replace(/ /g, '') //para remover whitespaces


for (let i = 0; i < 1000; i++) {

    if (primo(i))
        numbers2 += i+","
}

console.log(numbers2)

/** 
 *  número primo é um número natural maior do que 1 que tem apenas dois divisores 
 *  positivos distintos, 1 e ele mesmo
 * 
 */
function primo(num) {
    if (num < 2)
        return false

    if (num === 2)
        return true;

    if (num % 2 === 0)
        return false

    let cont = 1;
    for (let i = 3; i <= num; i++) {
        if (num % i === 0)
            cont++;
    }

    return cont > 2 ? false : true
}