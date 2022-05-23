var agora = new Date()

var diaSem = agora.getDay()

switch (diaSem){
    case 0: alert(`Hoje é Domingo`)
        break
    case 1: alert(`Hoje é Segunda`)
        break
    case 2: alert(`Terça`)
        break
    case 3: alert(`Quarta`)
        break
    case 4: alert(`Quinta`)
        break
    case 5: alert(`Sexta`)
        break
        
        default: alert(`DIA INVÁLIDO`)
}
