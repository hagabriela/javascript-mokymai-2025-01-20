// Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.

let pazymiai = []

let generuojamuPazymiuSkaicius = Math.floor((Math.random () * 7) + 1)

for (let i = 0; i < generuojamuPazymiuSkaicius; i++) {
    pazymiai.push(Math.floor((Math.random () * 10) +  1))
}

console.log('Sugeneruoti pažymiai:' , pazymiai);

let teigiamiPazymiai = []
let neigiamiPazymiai = []

let suma = 0

for (const pazymys of pazymiai) {
    suma += pazymys
    if (pazymys < 5) {
        neigiamiPazymiai.push(pazymys)
    } else if (pazymys >= 5) {
        teigiamiPazymiai.push(pazymys)
    }
}

let vidurkis = suma / pazymiai.length

console.log('Pažymių vidurkis:' , vidurkis.toFixed(1));
console.log('Gavo neigiamų pažymių:' , neigiamiPazymiai.length);
console.log('Teigiami pažymiai:' , teigiamiPazymiai);




