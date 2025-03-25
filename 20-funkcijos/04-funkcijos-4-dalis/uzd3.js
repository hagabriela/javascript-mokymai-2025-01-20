// Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį. 
// Ši funkcija turėtų sugeneruoti iš to sakinį 
// (pvz Studentas Tomas turi vidurkį 8.7) ir tai grąžinti kaip atsakymą. 
// Iškvieskite šią funkciją bent porą kartų, perduodant vis skirtingus duomenis. 
// Gautus atsakymus išveskite.

function vidurkis(pazymiai) {
    let suma = 0

    for (const pazymys of pazymiai) {
        suma += pazymys
    }

    return suma / pazymiai.length
}

function isvedimas(vardas, vidurkis) {
    return `Studentas ${vardas} turi vidurkį ${vidurkis.toFixed(1)}`;
}

let pazymiai1 = [10, 8, 9, 7]
let pazymiai2 = [7, 6, 5, 5, 10, 9]

let vid1 = vidurkis(pazymiai1)
let vid2 = vidurkis(pazymiai2)

console.log( isvedimas('Tomas', vid1) );
console.log( isvedimas('Ona', vid2) );

