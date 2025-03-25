// Susikurkite bent 3 matematines funkcijas, priimančias reikiamus argumentus 
// (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas, sandauga, dalyba) 
// ir grąžinančias atitinkamus atsakymus. 
// Taip pat, susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis atsitiktinių skaičių 
// ir išvedami visų skaičiavimų atsakymai su veiksmais 
// (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus kintamuosius) 
// (pagal 7 pavyzdį). 
// Iškvieskite šią pagrindinę funkciją bent kartą.

function suma(sk1, sk2) {
    return sk1 + sk2 
}

function skirtumas(sk1, sk2) {
    return sk1 - sk2 
}

function sandauga(sk1, sk2) {
    return sk1 * sk2
}

function sumosIsvedimas(sk1, sk2) {
    console.log(`${sk1} + ${sk2} = ${suma(sk1, sk2)}`);
}

function skirtumoIsvedimas(sk1, sk2) {
    console.log(`${sk1} - ${sk2} = ${skirtumas(sk1, sk2)}`);
}

function sandaugosIsvedimas(sk1, sk2) {
    console.log(`${sk1} * ${sk2} = ${sandauga(sk1, sk2)}`);
}

function atsitiktinisSkaicius(min, max) {
    let atsitiktinis = Math.floor(Math.random() * (max - min)) + min
    return atsitiktinis
}

let atsitiktinisSkaicius1 = atsitiktinisSkaicius(5, 300)
console.log('Gautas pirmas atsitiktinis skaičius:', atsitiktinisSkaicius1);
let atsitiktinisSkaicius2 = atsitiktinisSkaicius(1, 10)
console.log('Gautas antras atsitiktinis skaičius:', atsitiktinisSkaicius2);

sumosIsvedimas(atsitiktinisSkaicius1, atsitiktinisSkaicius2)
skirtumoIsvedimas(atsitiktinisSkaicius1, atsitiktinisSkaicius2)
sandaugosIsvedimas(atsitiktinisSkaicius1, atsitiktinisSkaicius2)