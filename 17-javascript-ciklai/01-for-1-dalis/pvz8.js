let skaicius = 9

// koks sio skaiciaus maziausias dalyklis? po to cikla jau reikia sustabdyti - ji suradus

for (let daliklis = 2; true; daliklis++) {
    if (skaicius % daliklis == 0) {
        console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra ${daliklis}`);
        break
    }
}
// true - iki begalybes

// VIETOJE SITO
// if (skaicius % 2 == 0) {
//     console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra 2`)
// } else if (skaicius % 3 == 0) {
//     console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra 3`)
// } else if (skaicius % 4 == 0) {
//     console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra 4`)
// } else if (skaicius % 5 == 0) {
//     console.log(`Skaičiaus ${skaicius} mažiausias daliklis yra 5`)
// }