// Sukurkite funkciją, kuriai perduotumėte du skaičius. 
// Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, 
// o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. 
// Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.

function didesnis(sk1, sk2) {
    if (sk1 > sk2) {
        console.log(`${sk1} yra didesnis nei ${sk2}`);
    } else if (sk1 < sk2) {
        console.log(`${sk2} yra didesnis nei ${sk1}`);
    } else {
        console.log(`${sk1} ir ${sk2} yra lygūs`);
    }
}

didesnis(5, 100)
didesnis(50, 15)
didesnis(2, 2)
