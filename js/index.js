//DOMANDE DA CHIEDERE ALL'UTENTE
let km = prompt('Quanti km vuoi percorrere?');
let anni = prompt('Quanti anni hai?');

//ANNI DEI MINORENNI E DEGLI OVER 65 
const minorenni = 18;
const over = 65;

//PREZZO DEL BIGLIETTO PER KM
let prezzoPieno = km * 0.21;

//OPERAZIONE PER LA SCONTISTICA DEI MINORENNI E DEGLI OVER 65
let prezzoTot40 = (prezzoPieno - (40 * prezzoPieno / 100)).toFixed(2);
let prezzoTot20 = (prezzoPieno - (20 * prezzoPieno / 100)).toFixed(2);

//SE E ALTRIMENTI
if (anni > over){
    console.log('COSTO PER GLI OVER',prezzoTot40)
}else if (anni < minorenni){
    console.log('COSTO PER IL MINORENNE', prezzoTot20)
}else{
    console.log('PREZZO PIRENO', prezzoPieno)
}

console.log (anni, km);