// Susikurkite funkciją, kuri per argumentus gautų skaičių. 
// Ji turėtų surasti duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). 
// Už funkcijos ribų sukite ciklą nuo 10 iki 30 ir 
// kiekvienoje ciklo iteracijoje iškvieskite šią funkciją, perduodant ciklo kintamąjį.

function maziausiasDaliklis(skaicius) {
    for (let i = 2; i <= skaicius; i++) {
        if (skaicius % i === 0) {
            return i;
        }
    }
}

for (let i = 10; i <= 30; i++) {
    console.log(`Skaičiaus ${i} mažiausias daliklis: ${maziausiasDaliklis(i)}`);
}

