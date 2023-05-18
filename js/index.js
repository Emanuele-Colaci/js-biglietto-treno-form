//DOMANDE DA CHIEDERE ALL'UTENTE

//BOTTONE
let button = document.getElementById('click');
button.addEventListener('click', function(){
    let nome = document.getElementById('nome').value;
    let eta = document.getElementById('anni').value;
    let km = document.getElementById('km').value;
    console.log(nome);
    document.getElementById('stampa').innerHTML = (nome);
    document.getElementById('offerta').innerHTML = (eta);
    let prezzoPieno = km * 0.21;
    let prezzoTot20 = (prezzoPieno - (20 * prezzoPieno / 100)).toFixed(2);
    let prezzoTot40 = (prezzoPieno - (40 * prezzoPieno / 100)).toFixed(2);
    
    const minorenni = 18;
    const over = 65;
    
    if (anni > over){
        console.log('COSTO PER GLI OVER',prezzoTot40)
    }else if (anni < minorenni){
        console.log('COSTO PER IL MINORENNE', prezzoTot20)
    }else{
        console.log('PREZZO PIRENO', prezzoPieno)
    }
    
    document.getElementById('costo').innerHTML = (prezzoPieno, prezzoTot40, prezzoTot20);
    
})

//ANNI DEI MINORENNI E DEGLI OVER 65 

//PREZZO DEL BIGLIETTO PER KM

//OPERAZIONE PER LA SCONTISTICA DEI MINORENNI E DEGLI OVER 65

//SE E ALTRIMENTI