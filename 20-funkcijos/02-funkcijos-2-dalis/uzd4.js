// Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, 
// bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). 
// Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. 
// Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, 
// bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. 
// Šią bendrąją funkciją iškvieskite keletą kartų.

function suma(sk1, sk2) {
    console.log(`${sk1} + ${sk2} = ${sk1 + sk2}`);
}

function skirtumas(sk1, sk2) {
    console.log(`${sk1} - ${sk2} = ${sk1 - sk2}`);
}

function sandauga(sk1, sk2) {
    console.log(`${sk1} * ${sk2} = ${sk1 * sk2}`);
}

function dalmuo(sk1, sk2) {
    console.log(`${sk1} / ${sk2} = ${(sk1 / sk2).toFixed(1)}`);
}

function sugeneruotiSkaiciai() {
    let skaicius1 = Math.floor(Math.random() * 100) + 1
    let skaicius2 = Math.floor(Math.random() * 10) + 1
    suma(skaicius1, skaicius2)
    skirtumas(skaicius1, skaicius2)
    sandauga(skaicius1, skaicius2)
    dalmuo(skaicius1, skaicius2)
}

sugeneruotiSkaiciai()
sugeneruotiSkaiciai()
