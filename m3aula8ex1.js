//Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;

times = ["Grêmio","Inter","Corinthians","Flamengo","Santos"]
console.log("Aqui usando for...of")
for (lista of times){
  console.log(lista)
}

console.log()
console.log("Aqui usando while")
clubes=0
while (clubes < times.length){
  console.log(times[clubes])
  clubes++
}

console.log()
console.log("Aqui usando do...while")
i=0
do{
  console.log(times[i++])
} while (i<times.length)