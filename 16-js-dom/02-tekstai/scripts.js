// alert('labas')

let preke1pavadinimas = document.querySelector('.preke1 h3').textContent
let preke1kaina = parseInt( document.querySelector('.preke1 .kaina span').textContent )
let preke1likutis = parseInt( document.querySelector('.preke1 .likutis span').textContent)
// parseInt, kad skaicius issivestu kaip skaicius, o ne tekstine reiksme ir parseInt skaicius be kablellio, parseFloat su / per kableliu

// console.log({ preke1pavadinimas, preke1kaina, preke1likutis })

let preke2pavadinimas = document.querySelector('.preke2 h3').textContent
let preke2kaina = parseInt( document.querySelector('.preke2 .kaina span').textContent )
let preke2likutis = parseInt( document.querySelector('.preke2 .likutis span').textContent)

// console.log({ preke2pavadinimas, preke2kaina, preke2likutis })

let prekiuAts = document.querySelector('.prekiu-skaiciavimai')
// console.log(prekiuAts);

// brangesnės prekės paieška

if (preke1kaina > preke2kaina) {
    // console.log(preke1pavadinimas);
    prekiuAts.querySelector('.brangesne').textContent = preke1pavadinimas
    prekiuAts.querySelector('.brangesne-per').textContent = preke1kaina - preke2kaina
} else if (preke1kaina < preke2kaina) {
    // console.log(preke2pavadinimas);
    prekiuAts.querySelector('.brangesne').textContent = preke2pavadinimas
    prekiuAts.querySelector('.brangesne-per').textContent = preke2kaina - preke1kaina
} else {
    // console.log('abi prekės kainuoja vienodai');
    prekiuAts.querySelector('.brangesne').textContent = 'abi prekės kainuoja vienodai'
    prekiuAts.querySelector('.brangesne-per').textContent = 0
}

if (preke1likutis > preke2likutis) {
    // console.log(preke2pavadinimas);
    prekiuAts.querySelector('.maziau-likucio').textContent = preke2pavadinimas
} else if (preke1likutis < preke2likutis) {
    // console.log(preke1pavadinimas);
    prekiuAts.querySelector('.maziau-likucio').textContent = preke1pavadinimas
} else {
    // console.log('abiejų prekių likučio turime vienodai');
    prekiuAts.querySelector('.maziau-likucio').textContent = 'abiejų prekių likučio turime vienodai'
}
