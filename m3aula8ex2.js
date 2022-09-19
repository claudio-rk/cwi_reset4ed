//Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

matriz = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
soma = 0

for (i=0; i<matriz.length; i++){
  soma += matriz[i]
}
media = soma/matriz.length
console.log("A soma é", soma)
console.log("A média é",media)