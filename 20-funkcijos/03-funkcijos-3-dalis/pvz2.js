function vidurkis(pazymiai) {
    let suma = 0

    for (const pazymys of pazymiai) {
        suma += pazymys
    }

    let vid = suma / pazymiai.length

    console.log('Gautas vidurkis:', vid.toFixed(2));
}

function isvedimas(pazymiai, prierasas) {
    console.log(prierasas, pazymiai.join(', '));
    vidurkis(pazymiai)
    console.log();
}

let pazymiai1 = [10, 8, 9, 7]
let pazymiai2 = [10, 10, 9]
let pazymiai3 = [7, 8, 9, 7, 10, 9]

isvedimas(pazymiai1, 'Pirmo studento pažymiai:')
isvedimas(pazymiai2, 'Antro studento pažymiai:')
isvedimas(pazymiai3, 'Trečio studento pažymiai:')

// vidurkis(pazymiai1)
// vidurkis(pazymiai2)
// vidurkis(pazymiai3)

// console.log('Pirmo studento pažymiai:', pazymiai1.join(', '))




