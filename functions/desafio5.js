/*  1) inverter o texto; 
    2) adicionar um caractere de símbolo (‘!@#$%¨&*+) para cada caractere normal. 
    3) Descriptografar: 
        a) retirando os caracteres adicionados
        b) Invertar novamente

*/

const txt = "Vitor Lucas"
//let cripto = "s#o$p%m*a@C& 'é!r+d)n#A$ %e*d@ &,'o!ã+ç)i#d$e% *a@r&i'e!m+i)r#p$ %,*t@r&a't!S+ )t#p$i%r*c@S&a'v!a+J)"

const encrypted = cryptString(txt, true)
console.log("Array Criptografado:\n", encrypted)

const decrypted = cryptString(encrypted, false)
console.log("Array Descriptografado:\n", decrypted)

function cryptString(str, b) {
    let aux = ""
    //Se b então é pra criptografar
    if (b) {
        for (let i = 0; i < str.length; i++) {
            aux += str[str.length - i - 1] + getSpecialChar()
        }
        return aux
    } else {
        for (let i = 0; i < str.length; i++) {
            let tmp = str[str.length - i - 1];
            switch (tmp) {
                case "'":
                    continue
                case "!":
                    continue
                case "@":
                    continue
                case "#":
                    continue
                case "$":
                    continue
                case "%":
                    continue
                case "¨":
                    continue
                case "&":
                    continue
                case "*":
                    continue
                default:
                    aux += tmp;
                    continue
            }

        }
        return aux

    }
}


// console.log("Without special chars", array)

function getSpecialChar() {
    const num = Math.round(Math.random() * 9) // !@#$%¨&*+'
    switch (num) {
        case 0:
            return "!"
        case 1:
            return "@"
        case 2:
            return "#"
        case 3:
            return "$"
        case 4:
            return "%"
        case 5:
            return "¨"
        case 6:
            return "&"
        case 7:
            return "*"
        default:
            return "'"
    }
}

// console.log(final)