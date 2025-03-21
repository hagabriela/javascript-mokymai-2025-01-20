let prekes = [
    {
        pavadinimas: 'Pomidorai',
        kaina: 2.49,
        kiekis: 40,
        matavimoVnt: 'kg',
    },
    {
        pavadinimas: 'Salotos',
        kaina: 1.99,
        kiekis: 20,
        matavimoVnt: 'vnt',
    },
    {
        pavadinimas: 'Traškučiai',
        kaina: 5.99,
        kiekis: 74,
        matavimoVnt: 'vnt',
    }
]

console.log('Visos prekės');
console.log(prekes);
console.log();

console.log('Pirma prekė');
console.log(prekes[0]);
console.log('Antra prekė');
console.log(prekes[1]);
console.log('Trečia prekė');
console.log(prekes[2]);

console.log('-------------------');

for (const preke of prekes) {
    // console.log(preke);
    console.log(preke.pavadinimas);
}

console.log('-------------------');

for (const preke of prekes) {
    console.log(`Prekė ${preke.pavadinimas}, kainuoja ${preke.kaina} eur`);
    console.log('Jos turime:', preke.kiekis, preke.matavimoVnt);
}

console.log('-------------------');

let kainuSuma = 0

for (const preke of prekes) {
    // console.log(preke.kaina)
    kainuSuma += preke.kaina
}

// console.log(prekes.length)
let kainuVidurkis = kainuSuma / prekes.length
console.log(`Prekių kainos vidurkis yra ${kainuVidurkis.toFixed(2)} eur`)




