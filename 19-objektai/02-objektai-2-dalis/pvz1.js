let parama = {
    '2024_03': 1420,
    '2024_04': 2024,
    '2024_05': 3410,
    '2024_06': 1432
}

console.log(parama);

console.log(parama['2024_04'])
// parama.raktas galima būtų naudoti
// (naudoti sintaksę per tašką),
// tik jeigu pats raktas prasideda _
// arba raide, jame nėra tarpų ar kitų
// specialių simbolių

let raktas = '2024_06'
console.log(parama[raktas]);

// masyve duomenys yra rikiuoti, o
// eiliškumas ateina iš to kaip duomenis
// susidedame, bei kaip surikiuojame
// su sort

// tuo tarpu objekte duomenys gali papulti
// bet kokiu eiliškumu ir jie nėra
// rikiuojami, t.y. sort() neveiktų,
// objektą galima įsivaizduot kaip dėžę
// į kurią random tvarka esam sumetę
// daiktus

// arba vietoj raktas laikotarpis
for (const raktas in parama) {
    console.log('Laikotarpis:', raktas);
    console.log('Gauta paramų suma:', parama[raktas], 'eur');
}

console.log();

for (const laikotarpis in parama) {
    console.log(`Laikotarpiu ${laikotarpis} gauta paramos ${parama[laikotarpis]} eur`)
}

// dot notation: objektas.raktas
// bracket notation: objektas['raktas']

// kai rašome objektas.raktas - ima būtent tokį raktą koks yra parašytas po taško
// tai net jeigu turėtumėt kintamąjį tokiu pavadinimu koks yra po taško - tai to
// kintamojo čia nenaudotų, o objekte ieškotų būtent taip kaip yra parašyta

// kai rašome objektas['raktas'] - ima tokį raktą kuris yra parašytas kabutėse

// arba objektas[kintamasis] - įsistato kintamąjį į rakto poziciją ir ieško rakto
// kuris sutaptų su kintamojo reikšme, šitas variantas tinka kai turime dinaminius raktus,
// t.y. raktus kurie ateina iš kintamųjų ar ciklų