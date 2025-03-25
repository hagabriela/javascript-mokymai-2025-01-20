// Susikurkite funkciją, kuri per argumentus gautų skaičių. 
// Ji turėtų patikrinti ar šis skaičius yra pirminis 
// (grąžina true jei pirminis, ir false jei ne pirminis). 
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje 
// ciklo iteracijoje išveskite tikrinamą skaičių ir 
// šalia jo iškviestos funkcijos atsakymą (pvz 10 false, 11 true, ...).

function pirminis(skaicius) {
    if (skaicius < 2) return false;
    for (let i = 2; i <= Math.sqrt(skaicius); i++) {
        if (skaicius % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i <= 15; i++) {
    console.log(`${i} ${pirminis(i)}`);
}
