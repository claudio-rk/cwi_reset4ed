/*Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
-Crie uma função para cada algoritmo proposto lá, exceto o número 6;
-Todas as funções devem retornar o valor final;
-Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
-Procure utilizar comentários para documentar cada método;
-Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. -Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.*/

//Ex 1: Verificar se Nome do Fulano é igual ao Nome do Beltrano
function verificarNome (nomeDoFulano, nomeDoBeltrano){
  return nomeDoFulano == nomeDoBeltrano
}

nome = verificarNome("Bruno","Bruno")

if (nome == true){
  console.log("Tem o mesmo nome.")
} else {
  console.log("Os nomes são diferentes.")
}
console.log()
//Ex 2: Verifica se a idade é de um adulto
function verificarIdade (i){
  return i < 18
}

idade = verificarIdade(18)

if (idade == true){
  console.log("É menor de idade.")
} else {
  console.log("É maior de idade.")
}
console.log()

//Ex 3: Valor com Juros de boleto acrescido de 10%
function valorFinal(valorBoleto){
  return valorBoleto*1.1
}
valorComJuros = valorFinal(300)
valorComJuros = valorComJuros.toFixed(2)
console.log("O valor do boleto com juros ficou R$",valorComJuros)
console.log()

//Ex 4: Média aritmética de 5 elementos
itens = [5, 10, 15, 20, 50]

function mediaAritmetica(itens){
  soma = 0
  
  for (x = 0; x < itens.length; x++){
  soma += itens[x]
  }
  return soma / itens.length
}
media = mediaAritmetica(itens)
console.log("A media Aritmética é:",media)
console.log()

//Ex 5: Margem bruta empresa
function margemBruta(receitaLiquida, custoProdutos){
  return (receitaLiquida - custoProdutos)/receitaLiquida
}

margemPercentual = margemBruta(100,20)
console.log("A margem bruta é de",margemPercentual*100,"%.")