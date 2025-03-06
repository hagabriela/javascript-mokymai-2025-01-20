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

// -- gyvūnų blokelis

// 1. gauti visą visų gyvūnų div (vienas blokas kuriame yra visi kiti)

let gyvunuBlokas = document.querySelector('.gyvunai')
console.log('Visų gyvūnų bendras div:' , gyvunuBlokas);

// 2. gauti visus gyvūnų blokelius bendrame sąraše (bus 6 blokai kaip sąraše)

let gyvunas = document.querySelectorAll('.gyvunai .gyvunas')
console.log('Gyvūnas v1:' , gyvunas);

let gyvunasV2 = gyvunuBlokas.querySelectorAll('.gyvunas')
console.log('Gyvūnas v2:' , gyvunasV2);

// 3. gauti pirmą gyvūną iš sąrašo

let pirmasGyvunas = document.querySelector('.gyvunas1')
console.log('Pirmas gyvūnas:' , pirmasGyvunas);

// let pirmasGyvunasV1 = document.querySelector('.gyvunai .gyvunas')
// let pirmasGyvunasV1 = document.querySelector('.gyvunas')
// let pirmasGyvunas = gyvunuBlokas.querySelector('.gyvunas1')

// 4. gauti ketvirtą gyvūną iš sąrašo

let ketvirtasGyvunas = document.querySelector('.gyvunas4')
console.log('Ketvirtas gyvūnas:' , ketvirtasGyvunas);

// let ketvirtasGyvunas = document.querySelector('.gyvunai .gyvunas4')
// let ketvirtasGyvunas = document.querySelectorAll('.gyvunas')[3]

// 5. gauti ketvirto gyvūno aprašymo paragrafą

// let gyvuno4Paragrafas = document.querySelector('.gyvunai .gyvunas4 p')
// let gyvuno4Paragrafas = document.querySelector('.gyvunas4 p')

let gyvuno4Paragrafas = ketvirtasGyvunas.querySelector('p')
console.log('Ketvirto gyvūno aprašymo paragrafas:' , gyvuno4Paragrafas);

// 6. gauti penkto gyvūno antraštės žymą

// let gyvuno5Antraste = document.querySelector('.gyvunai .gyvunas5 h3')
let gyvuno5Antraste = document.querySelector('.gyvunas5 h3')
console.log('Penkto gyvūno antraštė:' , gyvuno5Antraste);

let penktasGyvunas = ketvirtasGyvunas.nextElementSibling
console.log('penktas gyvūnas:', penktasGyvunas)

let penktoAntrasteV2 = penktasGyvunas.querySelector('h3')
console.log('penkto antraštė:', penktoAntrasteV2)

let penktoAntrasteV3 = ketvirtasGyvunas.nextElementSibling.querySelector('h3')
console.log('penkto antraštė:', penktoAntrasteV3)

// 7. gauti trečio gyvūno antraštę, bei paragrafą (du atskiri selektai)

console.log('trečio gyvūno antraštė:', document.querySelector('.gyvunas3 h3'))
console.log('trečio gyvūno paragrafas:', document.querySelector('.gyvunas3 p'))








