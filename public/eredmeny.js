
const eredmenyDiv = document.getElementById('eredmeny-Div');

function berak(elem) {
    const p = document.createElement('p');
    p.innerText = elem.nev + ': ' + elem.szavazatok;
    eredmenyDiv.appendChild(p);
}

function oldalGeneralas(eredmeny) {
    console.log(eredmeny);

    eredmeny.forEach(berak);
}

fetch('/eredmenyek')
    .then(function(válasz){
        válasz.json().then(oldalGeneralas);
    })