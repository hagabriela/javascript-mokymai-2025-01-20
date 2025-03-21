// Susikurkite knygų objektų masyvą. 
// Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes).
//  Į masyvą įdėkite bent 3 knygas. 
// Visas šias knygas išsiveskite. 
// Tuomet parodykite pirmą knygą. 
// Antros knygos kažkurią savybę.

let knygos = [
    {
        pavadinimas: 'apie saulę',
        kaina: 13.99,
        autorius: 'Jonas Jonaitis'
    },
    {
        pavadinimas: 'miškininkas',
        kaina: 29.99,
        autorius: 'Petras Petrauskas'
    },
    {
        pavadinimas: 'mistika ABC',
        kaina: 7.99,
        autorius: 'Gintarė Gintarytė'
    }
]

console.log('Knygos:');
console.log(knygos);

console.log('Pirmoji knyga:', knygos[0]);
console.log('Antros knygos autorius:', knygos[1].autorius);




