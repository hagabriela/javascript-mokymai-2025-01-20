// Susikurkite parduotuvės objektą, kuriame būtų ši informacija: 
// pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. 
// Apie kiekvieną prekę parduotuvėje žinoma ši informacija: 
// pavadinimas; kodas; kaina; savikaina; turimas kiekis. 
// Išveskite parduotuvės bendrą informaciją, tuomet užrašą "prekės" 
// ir atskirose eilutėse turimas prekes su kuria nors jų informacija 
// (pvz.: pavadinimai, kainos ir turimi kiekiai). 
// Galiausiai paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius). 
// Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai.

let parduotuve =  {
    pavadinimas: 'Maxima',
    adresas: 'Sausio 13-osios g. 3',
    darbuotoju: 57,
    prekes: [
        {
            pavadinimas: 'duona',
            kodas: 87698,
            kaina: 1.5,
            savikaina: 0.3,
            kiekis: 100
        },
        {
            pavadinimas: 'indų ploviklis',
            kodas: 56457,
            kaina: 0.99,
            savikaina: 0.2,
            kiekis: 50
        },
        {
            pavadinimas: 'plaukų šampūnas',
            kodas: 94850,
            kaina: 6.5,
            savikaina: 3,
            kiekis: 20
        }
    ]
}

let kiekiuSuma = 0

let maxPreke = parduotuve.prekes[0]
let daugiausia = maxPreke.kiekis

let minPreke = parduotuve.prekes[0]
let maziausia = minPreke.kiekis

console.log('Parduotuvė', parduotuve);
console.log('Prekės:');

for (const preke of parduotuve.prekes) {
    console.log(`${preke.pavadinimas} kainuoja ${preke.kaina} eur, jų yra ${preke.kiekis}`);

    kiekiuSuma += preke.kiekis

    if (preke.kiekis > daugiausia) {
        daugiausia = preke.kiekis
        maxPreke = preke
    }

    if (preke.kiekis < maziausia) {
        maziausia = preke.kiekis
        minPreke = preke
    }
}

console.log('Parduotuvė turi visų prekių:', kiekiuSuma);

console.log(`Daugiausia turimas prekės kiekis ${daugiausia}`);
console.log(`Jis priklauso ${maxPreke.pavadinimas} prekei`);

console.log(`Mažiausias turimas prekės kiekis ${maziausia}`);
console.log(`Jis priklauso ${minPreke.pavadinimas} prekei`);


