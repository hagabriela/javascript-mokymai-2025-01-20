let studentai = [
    { vardas: 'Jonas', pazymiai: [9, 10, 9] },
    { vardas: 'Inga', pazymiai: [10, 10, 9] },
    { vardas: 'Ona', pazymiai: [7, 8, 9, 10, 4] },
    { vardas: 'Petras', pazymiai: [9, 8, 9, 10] },
    { vardas: 'Augustina', pazymiai: [10, 9] },
]

let maxStudentas = studentai[0]
let maxVidurkis = 0

for (const studentas of studentai) {
    // console.log(studentas);
    console.log(studentas.vardas);
    // console.log(studentas.pazymiai);

    let suma = 0

    for (const pazymys of studentas.pazymiai) {
        // console.log(pazymys);
        suma += pazymys
    }

    let vidurkis = suma / studentas.pazymiai.length
    console.log('Studento/-ės vidurkis:' , vidurkis.toFixed(1));

    // ar dabartinio studento vidurkis didesnis nei man
    // iki dabar žinomas didžiausias vidurkis?
    if(vidurkis > maxVidurkis) {
        maxVidurkis = vidurkis
        maxStudentas = studentas
    }
}

console.log(`Didžiausias vidurkis yra ${maxVidurkis.toFixed(1)} balų`);
console.log(`Jis priklauso ${maxStudentas.vardas} studentui/-ei`);

console.log('-----------');

// Paprastesnis to pacio varianto, be objektu

let skaiciai = [7, 8, 9, 3, 10, 17, 2]

// let didziausias = skaiciai[0]
let didziausias = 0

for (const skaicius of skaiciai) {
    if (skaicius > didziausias) {
        didziausias = skaicius
    }
}

console.log('Didžiausias skaičius yra', didziausias)



