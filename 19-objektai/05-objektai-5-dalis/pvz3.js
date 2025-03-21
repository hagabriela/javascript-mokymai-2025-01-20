let studentai = [
    { vardas: 'Jonas', pazymiai: [9, 10, 9] },
    { vardas: 'Inga', pazymiai: [10, 10, 9] },
    { vardas: 'Ona', pazymiai: [7, 8, 9, 10, 4] },
    { vardas: 'Petras', pazymiai: [9, 8, 9, 10] },
    { vardas: 'Augustina', pazymiai: [10, 9] },
]

for (const studentas of studentai) {
    let suma = 0

    for (const pazymys of studentas.pazymiai) {
        suma += pazymys
    }

    // cia isimtis kai cikle pakeiciam kintamaji
    // kaip raktas, isidedam papildoma rakta su kintamuoju
    studentas.vidurkis = parseFloat(suma / studentas.pazymiai.length).toFixed(1)

    // cia tik iki sveiko skaiciaus
    // studentas.vidurkis = Math.round(suma / studentas.pazymiai.length) 
    // isves kaip tekstas
    // studentas.vidurkis = (suma / studentas.pazymiai.length).toFixed(1)
}

console.log(studentai);

let maxStudentas = studentai[0]

for (const studentas of studentai) {
    if (studentas.vidurkis > maxStudentas.vidurkis) {
        maxStudentas = studentas
    }
}

console.log(`Didžiausias vidurkis yra ${maxStudentas.vidurkis} balų`);
console.log(`Jis priklauso ${maxStudentas.vardas} studentui/-ei`);
