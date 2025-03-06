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




