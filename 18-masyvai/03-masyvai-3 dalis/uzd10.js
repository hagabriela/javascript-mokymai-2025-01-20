// Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.

let pazymiai1 = [10, 9, 8, 9, 10, 10, 10]
let pazymiai2 = [5, 7, 3, 8, 6, 7]

let suma1 = 0
let suma2 = 0

console.log('Pirmojo studento pažymiai:');

for (const pazymys of pazymiai1) {
    console.log(pazymys);
    suma1 += pazymys
}

console.log(pazymiai1);

let vidurkis1 = suma1 / pazymiai1.length

console.log('Pirmojo studento pažymių vidurkis:' , vidurkis1.toFixed(1));


console.log('Antrojo studento pažymiai:');

for (const pazymys of pazymiai2) {
    console.log(pazymys);
    suma2 += pazymys
}

console.log(pazymiai2);

let vidurkis2 = suma2 / pazymiai2.length

console.log('Antrojo studento pažymių vidurkis:' , vidurkis2.toFixed(1));

if (vidurkis1 > vidurkis2) {
    console.log('Pirmojo studento pažymių vidurkis yra didesnis');
} else if (vidurkis1 < vidurkis2) {
    console.log('Antrojo studento pažymių vidurkis yra didesnis');
} else if (vidurkis1 ==  vidurkis2) {
    console.log('Abiejų studentų vidurkis yra vienodas');
}
