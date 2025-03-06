// alert('labas')

let pirmasBlokas = document.getElementById('pirmas')
// console.log(pirmasBlokas);
console.dir(pirmasBlokas)
// per Google Chrome matome, ka turi elementas ir galima daryti

pirmasBlokas.style.backgroundColor = 'royalblue'

console.dir( document.getElementById('antras') )

let antroParagrafas = document.querySelector('#antras p')
console.log('antro bloko paragrafas:' , antroParagrafas);

let antroParagrafai = document.querySelectorAll('#antras p')
console.log('antro bloko paragrafai:' , antroParagrafai);

// paieška dokumente vs žymoje

console.log('pirmas paragrafas:' , document.querySelector('p'));

let antrasBlokas = document.getElementById('antras')
console.log('pirmas paragrafas antrame bloke:' , antrasBlokas.querySelector('p'));

let forma = document.querySelector('form')
console.log(forma);

console.log('vardo input:' , forma.children.vardas);
console.log('el. pašto input:' , forma.children.elpastas);

// darbas su prekėmis

// gauti visas prekes iš suvesto html

let prekes = document.querySelectorAll('.preke')
console.log('Surastos prekės:' , prekes);

// gauti visą pirmos prekės bloką

let pirmaPreke = document.querySelector('.preke1')
// let pirmaPreke = document.getElementsByClassName('preke1')
console.log('Pirmos prekės blokas:' , pirmaPreke);

// gauti visą antros prekės bloką

let antraPreke = document.querySelector('.preke2')
// let antraPreke = document.getElementsByClassName('preke2')
console.log('Antros prekės blokas:' , antraPreke);

// gauti pirmos prekės pavadinimą (žymą kurioje yra pavadinimas)

let prekes1Pavadinimas = document.querySelector('.preke1 h3')
console.log('Pirmos prekės pavadinimas:' , prekes1Pavadinimas);

let pavadinimasV2 = pirmaPreke.querySelector('h3')
console.log('Pirmos prekės pavadinimas:' , pavadinimasV2);

// gauti antros prekės kainą (žymą kurioje yra kaina)

let prekes2Kaina = antraPreke.querySelector('.kaina')
console.log('Antros prekės kaina:' , prekes2Kaina);








