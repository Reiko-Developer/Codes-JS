class Funcionario {
    constructor() {
        this.nome = ""
        this.idade = 0
        this.tempoCasa = 0
        this.salario = 0
        this.cargo = ""
        this.funcao = ""
        this.descontoIR = 0;
        this.descontoIRPerc = 0;

    }

    calculaBonus() {
        if (this.tempoCasa > 2) {
            if (this.tempoCasa > 8)
                this.bonus = this.salario * 0.08;
            else
                this.bonus = this.salario * 0.01 * this.tempoCasa
        }
    }

    mostraDescontoIR() {
        console.log(`Nome: ${this.nome}. Salário: R$ ${this.salario}.`)
        console.log(`Desconto de IR: R$ ${this.descontoIR}. Alíquota: ${this.descontoIRPerc}`);
        console.log(`---------------------------------------`)
    }

    static calculaDescontIR(fun) {
        let desconto = 0;

        if (fun.salario > 1903 && fun.salario < 2827)
            desconto = 7.5;
        else if (fun.salario > 2826 && fun.salario < 3751.07)
            desconto = 15;
        else if (fun.salario > 3751.06 && fun.salario < 4664.70)
            desconto = 22.5;
        else if (fun.salario > 4664.69)
            desconto = 27.5;
        let valor = fun.salario * desconto / 100;
        
        fun.descontoIR = valor;
        fun.descontoIRPerc = desconto;
    }

}

class Gerente extends Funcionario {
    calculaBonus() {
        if (this.tempoCasa > 1) {
            let percentual = this.tempoCasa > 8 ? 8 : this.tempoCasa;
            this.bonus = this.salario * percentual / 100
        }
    }
}


let fun = new Funcionario()

fun.nome = "Vitor Lucas"
fun.idade = 26
fun.tempoCasa = 5
fun.salario = 2000
fun.cargo = 'Programador Fullstack!'
fun.funcao = 'Gerenciar todos os projetos da empresa'
Funcionario.calculaDescontIR(fun)
fun.calculaBonus()

console.log('Func: ', `
${fun.nome} é ${fun.cargo} e já trabalha conosco há ${fun.tempoCasa} anos.`)
console.log("Bônus salarial: ", fun.bonus)
fun.mostraDescontoIR();


let ger = new Gerente()
ger.nome = "Reiko"
ger.idade = 27
ger.tempoCasa = 2
ger.salario = 20000
ger.cargo = 'Presidente'
ger.funcao = 'Gerencia toda a empresa'
ger.bonus = 0
Funcionario.calculaDescontIR(ger)
ger.calculaBonus()


console.log('Func(2): ', `
${ger.nome} é ${ger.cargo} e já trabalha conosco há ${ger.tempoCasa} anos.`)
console.log("Bônus salarial: ", ger.bonus)
ger.mostraDescontoIR();