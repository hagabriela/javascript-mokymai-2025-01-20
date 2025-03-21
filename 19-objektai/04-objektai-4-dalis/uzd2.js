// Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. 
// Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. 
// Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį,
//  bendrą ar vidutinį darbuotojų kiekį, ar pan.

let ligonines = [
    {
        pavadinimas: 'Santaros klinikos',
        adresas: 'Santariškių g. 2',
        lankytojuKiekis: 500,
        darbuotojuKiekis: 5000
    },
    {
        pavadinimas: 'Antakalnio klinikos',
        adresas: 'Antakalnio g. 47',
        lankytojuKiekis: 150,
        darbuotojuKiekis: 1500
    },
    {
        pavadinimas: 'Lazdynų ligoninė',
        adresas: 'Lazdynų g. 5',
        lankytojuKiekis: 300,
        darbuotojuKiekis: 3000
    }
]

let sumaLankytoju = 0
let sumaDarbuotoju = 0

for (const ligonine of ligonines) {
    console.log(`${ligonine.pavadinimas} randasi tokiu adresu ${ligonine.adresas}`);
    sumaLankytoju += ligonine.lankytojuKiekis
    sumaDarbuotoju += ligonine.darbuotojuKiekis
}

console.log('Bendras lankytojų skaičius ligoninėse yra:', sumaLankytoju);
console.log('Bendras darbuotojų skaičius ligoninėse yra:', sumaDarbuotoju);
console.log('Bendrai yra tiek ligoninių:', ligonines.length);
