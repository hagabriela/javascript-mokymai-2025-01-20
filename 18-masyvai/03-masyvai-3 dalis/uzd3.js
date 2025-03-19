// Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.

let pazymiai = [5, 7, 9, 9, 10, 8]

let suma = 0

for (const pazymis of pazymiai) {
    suma += pazymis
}

let vidurkis = suma / pazymiai.length

console.log('Pažymiai:' , pazymiai);
console.log('Pažymių vidurkis:' , vidurkis.toFixed(1));

