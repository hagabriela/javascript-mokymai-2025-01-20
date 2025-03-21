// Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų žinoma ši informacija: 
// vardas ir pavardė, amžius, pažymiai, studijų programa, kursas. 
// Kiekvieną studentą išveskite taip: 
// pirmoje eilutėje visi studento duomenys išskyrus jo pažymius, 
// antroje eilutėje jo pažymiai, 
// trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. 
// Išvedus visus studentus dėkite brūkšnį (pvz.: -----) ir 
// išveskite bendrą visų studentų pažymių vidurkį.

let studentai = [
    {
        vardas: 'Tomas',
        pavarde: 'Tomaitis',
        amzius: 19,
        pazymiai: [
            8, 7, 6, 9
        ],
        programa: 'Slauga',
        kursas: 1
    },
    {
        vardas: 'Ona',
        pavarde: 'Onaitė',
        amzius: 21,
        pazymiai: [
            10, 9, 8, 9, 10, 10
        ],
        programa: 'Odontologija',
        kursas: 3
    },
    {
        vardas: 'Petras',
        pavarde: 'Petraitis',
        amzius: 20,
        pazymiai: [
            8, 9, 10, 8
        ],
        programa: 'Kineziterapija',
        kursas: 2
    }
]

let sumaStudentu = 0
let bendrasPazymiuKiekis = 0

for (const studentas of studentai) {
    console.log(`${studentas.vardas} ${studentas.pavarde} yra ${studentas.amzius} metų mokosi ${studentas.programa} ${studentas.kursas} kurse`);
    console.log('Studento pažymiai:', studentas.pazymiai);

    let sumaStudento = 0

    for (const pazymys of studentas.pazymiai) {
        // console.log(pazymys);
        sumaStudento += pazymys
    }

    let vidurkisStudento = sumaStudento / studentas.pazymiai.length
    console.log('Studento/-ės pažymių vidurkis:' , vidurkisStudento.toFixed(1));

    sumaStudentu += sumaStudento
    bendrasPazymiuKiekis += studentas.pazymiai.length;

}

console.log('-----------');

let vidurkisStudentu = sumaStudentu / bendrasPazymiuKiekis
console.log(`Bendras visų studentų pažymių vidurkis: ${vidurkisStudentu.toFixed(1)}`);

