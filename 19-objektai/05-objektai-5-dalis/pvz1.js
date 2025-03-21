let studentai = [
    { vardas: 'Jonas', pazymiai: [9, 10, 9] },
    { vardas: 'Inga', pazymiai: [10, 10, 9] },
    { vardas: 'Ona', pazymiai: [7, 8, 9, 10, 4] },
    { vardas: 'Petras', pazymiai: [9, 8, 9, 10] },
    { vardas: 'Augustina', pazymiai: [10, 9] },
]

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
}