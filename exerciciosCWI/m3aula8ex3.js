//Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

meuNome = "Claudio"
nomeComum = false

for (i=0; i < nomesComuns.length; i++){
  if (meuNome == nomesComuns[i]){
    nomeComum = true
    break
  }
}

if (nomeComum == true){
  console.log ("É, nome comum :P")
} else if (nomeComum == false){
  console.log ("Diferentão, hein? XD")
}