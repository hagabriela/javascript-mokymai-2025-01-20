function isvedimas(masyvas, prierasas) {
    console.log('==================');
    console.log('DUOMENYS:', prierasas);
    console.log('==================');
    for (const elementas of masyvas) {
        console.log('-', elementas);
    }
    console.log('==================');
    console.log('Duomenų kiekis:', masyvas.length);
    console.log('==================');
    console.log();
}

// arrow function - galima ir taip rasyti
// const isvedimas = (masyvas, prierasas) => {}

let zmones = ['Jolanta', 'Ugnius', 'Antanas', 'Gintarė']
let skaiciai = [7, 5, 9, 3, 2, 1, 4]

isvedimas(zmones, 'Žmonės')
isvedimas(skaiciai, 'Skaičiai')

