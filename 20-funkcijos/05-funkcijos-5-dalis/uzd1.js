// Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. 
// Ši funkcija turėtų rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. 
// Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite juos duomenimis. 
// Iškvieskite turimą funkciją du kartus, jai abu kartus perduodant skirtingą masyvą. 
// Gautus atsakymus išveskite. Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.

function suma(masyvas) {
    let suma = 0
    for (const skaicius of masyvas) {
        suma += skaicius
    }
    return suma
}

let skaiciai1 = [7, 8, 5, 3, 5, 3, 1]
let skaiciai2 = [8, 20, 7, 25, 12, 33, 55]

let suma1 = suma(skaiciai1)
let suma2 = suma(skaiciai2)

console.log(`Pirmųjų skaičių ${skaiciai1} suma yra ${suma1}`);
console.log(`Antrųjų skaičių ${skaiciai2} suma yra ${suma2}`);

if (suma1 > suma2) {
    console.log('Pirmųjų skaičių suma yra didesnė');
} else if (suma1 < suma2) {
    console.log('Antrųjų skaičių suma yra didesnė');
} else {
    console.log('Abiejų skaičių sumos yra vienodos');
}


