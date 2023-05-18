//BOTTONE
let button = document.getElementById('click');
button.addEventListener('click', function(){
//DOMANDE DA CHIEDERE ALL'UTENTE
    let nome = document.getElementById('nome').value;
    let eta = document.getElementById('anni').value;
    document.getElementById('stampa').innerHTML = (nome);
    document.getElementById('offerta').innerHTML = (eta + ' Anni');
    let km = document.getElementById('km').value;
    
    let prezzoPieno = km * 0.21;
    let prezzoTot40 = (prezzoPieno - (40 * prezzoPieno / 100)).toFixed(2);
    let prezzoTot20 = (prezzoPieno - (20 * prezzoPieno / 100)).toFixed(2);
//SE E ALTRIMENTI
    if (eta > 65){
        document.getElementById('costo').innerHTML =(`${prezzoTot40} €`)
    }else if (eta < 18){
        document.getElementById('costo').innerHTML =(`${prezzoTot20} €`)
    }else{
        document.getElementById('costo').innerHTML =(`${prezzoPieno} €`)
    }

})