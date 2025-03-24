// Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. 
// Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, 
// nurodant žodžio ilgį (simbolių kiekį). 
// Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. 
// Iškvieskite sukurtą funkciją perduodant turimą masyvą.

function isvedimas(masyvas, prierasas) {
    console.log(prierasas);
    for (const elementas of masyvas) {
        console.log('-', elementas, 'žodžio ilgis:', elementas.length);
    }
}

let zodziai = ['Eglė', 'Stalas', 'Kamuolys', 'Namelis']

isvedimas(zodziai, 'Žmonės')
