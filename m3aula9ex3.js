// Verifica se os dois nomes informados são iguais.
function imprimir (dado){
  console.log(dado)
}

function mesmoNome(primeiroNome, segundoNome) {
    return primeiroNome == segundoNome
}

// Verificação de idade

function maiorDeIdade(idade) {
    return idade >= 18
}

// Cálculo do valor do boleto com juros.
function valorComJuros(valorBoleto) {
    return valorBoleto * 1.1
}

//Cálculo da média aritmética 
function mediaAritmetica(itens) {
    soma = 0
    for (index = 0; index < itens.length; index++) {
        soma += itens[index]
    }

    return soma / itens.length
}

// Cálculo da margem bruta 
function margemBruta(receitaLiquidaVendas, custoProdutosVendidos) {
    lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
    return (lucroBruto / receitaLiquidaVendas) * 100
}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]