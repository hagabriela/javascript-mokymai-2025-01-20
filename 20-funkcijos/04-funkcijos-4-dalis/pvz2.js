function vidurkis(pazymiai) {
    let suma = 0

    for (const pazymys of pazymiai) {
        suma += pazymys
    }

    return suma / pazymiai.length
}

let pazymiai1 = [10, 8, 9, 7]
let pazymiai2 = [7, 8, 9, 9, 10, 9, 8]

let vid1 = vidurkis(pazymiai1)
let vid2 = vidurkis(pazymiai2)

console.log(`Pažymių ${pazymiai1.join(', ')} vidurkis yra ${vid1}`);
console.log(`Pažymių ${pazymiai2.join(', ')} vidurkis yra ${vid2}`);
console.log();

if (vid1 > vid2) {
    console.log('Pirmojo studento vidurkis yra aukštesnis');
} else if (vid1 < vid2) {
    console.log('Antrojo studento vidurkis yra aukštesnis');
} else {
    console.log('Abiejų studentų vidurkis yra vienodas');
}

