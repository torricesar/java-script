var agora = new Date()
var horaexata = agora.getHours()

if( horaexata < 12 ) {
    alert(`Bom dia! São ${horaexata}`)
} else if( horaexata <= 18 ) {
    alert(`Boa tarde! São ${horaexata}`)
} else {
    alert (`Boa noite! São ${horaexata}`)
}