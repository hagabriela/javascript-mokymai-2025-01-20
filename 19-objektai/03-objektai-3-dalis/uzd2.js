// Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. 
// Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais 
// atskirose eilutėse.

let prekes = [
    {
        pavadinimas: 'Suknelė',
        kaina: 15,
        kiekis: 10,
    },
    {
        pavadinimas: 'Bateliai',
        kaina: 30,
        kiekis: 70,
    },
    {
        pavadinimas: 'Rankinė',
        kaina: 80,
        kiekis: 3,
    }
]

for (const preke of prekes) {
    console.log(`${preke.pavadinimas} kainuoja ${preke.kaina} eur`);
}
