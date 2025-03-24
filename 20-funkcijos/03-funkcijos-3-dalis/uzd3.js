// Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, 
// bei studento vardą su pavarde. 
// Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. 
// Taip pat, suskaičiuoti vidurkį, bei jį išvesti. 
// Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, 
// arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. 
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.

function vidurkis(pazymiai) {
    let suma = 0

    for (const pazymys of pazymiai) {
        suma += pazymys
    }

    let vid = suma / pazymiai.length

    console.log('Gautas vidurkis:', vid.toFixed(2));
}

function isvedimas(pazymiai, vardas, pavarde) {
    console.log(`${vardas} ${pavarde} pažymiai yra ${pazymiai.join(', ')}`);
    vidurkis(pazymiai)
    console.log();
}

let studentas1v = 'Tomas'
let studentas2v = 'Ona'

let studentas1p = 'Tomauskas'
let studentas2p = 'Onauskaitė'


let pazymiai1 = [10, 8, 9, 7]
let pazymiai2 = [7, 8, 9, 7, 10, 9]

isvedimas(pazymiai1, studentas1v, studentas1p)
isvedimas(pazymiai2, studentas2v, studentas2p)

