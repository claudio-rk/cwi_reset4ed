//Variáveis ------------
colaboradores = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades = [ 69, 66, 58, 61, 60, 64, 59, 55]
temposDeTrabalho = [ 31, 29, 30, 26, 25, 24, 26, 29]

//Funções -------------
function verificarAposentadoria(nome){

  colaborador = false
  idade = 0
  tempoTrabalho = 0

  for (pos = 0; pos < colaboradores.length; pos++){

    if (nome == colaboradores[pos]){
      colaborador = true
      idade = idades[pos]
      tempoTrabalho = temposDeTrabalho[pos]
    }
  }

  if (colaborador){
    porIdade = (idade >= 65)
    porTempo = (tempoTrabalho >= 30)
    porIdadeETempo = (idade >= 60 && tempoTrabalho >= 25)

    if (porIdade || porTempo || porIdadeETempo){
      console.log ("Parabéns, já pode sair de férias eternas :)")
    } else {
      console.log ("Infelizmente para você, ainda falta um tempo :(")
    }

  } else {
    console.log ("Colaborador inválido :|")
  }
 
} //encerra função

// Execução -----------

verificarAposentadoria('Rosiméri')    // true (regra 3)
verificarAposentadoria('Agripino')    // false (falta 1 ano de idade para regra 3)
verificarAposentadoria('Rhoger')      // true (todas)
verificarAposentadoria('Hudnélson')   // false (colaborador inexistente)
verificarAposentadoria('Gleysberto')  // true (regra 2)
verificarAposentadoria('Regislane')   // false (falta 1 ano de idade para regra 1 e 1 de trabalho para regra 3)
verificarAposentadoria('Cléverson')   // true (regras 1 e 3)
verificarAposentadoria('Nádio')       // true (regra 3)
verificarAposentadoria('Wellison')    // false (falta 1 ano de trabalho para regra 2)
verificarAposentadoria('Florisberto') // false (colaborador inexistente)