// Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. 
// Išveskite kiekvienos įmonės informaciją atskirose eilutėse, 
// gražiai suformatuotai (sakinio pavidalu ar pan.). 
// Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų 
// (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).

let imones = [
    {
        pavadinimas: 'UAB Statyba',
        ikurimoMetai: 2000,
        darbuotojuKiekis: 2500,
        pelnas: 500000
    },
    {
        pavadinimas: 'UAB Toto',
        ikurimoMetai: 2010,
        darbuotojuKiekis: 50,
        pelnas: 300000
    },
    {
        pavadinimas: 'UAB Nagai',
        ikurimoMetai: 2017,
        darbuotojuKiekis: 10,
        pelnas: 30000
    },
]

let dabartiniaiMetai = new Date().getFullYear()
let darbuotojuSuma = 0
let pelnasSuma = 0

for (const imone of imones) {
    console.log(`Imonė, kurios pavadinimas ${imone.pavadinimas}, buvo įkurta ${imone.ikurimoMetai}, joje dirba tiek darbuotojų - ${imone.darbuotojuKiekis} bei jos metinis pelnas yra ${imone.pelnas}`);
    console.log(`Įmonės amžius yra ${dabartiniaiMetai - imone.ikurimoMetai} metai`);
    darbuotojuSuma += imone.darbuotojuKiekis
    pelnasSuma += imone.pelnas
}

console.log('Darbuotojų kiekis per visas įmones yra:', darbuotojuSuma);
console.log('Bendras pelnas per visas įmones yra:', pelnasSuma);
