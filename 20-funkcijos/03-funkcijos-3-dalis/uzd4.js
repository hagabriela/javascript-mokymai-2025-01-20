// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. 
// Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. 
// Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą 
// ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. 
// Susikurkite tris tuščius masyvus. 
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, 
// kiekvieną kartą perduodant funkcijai vis kitą masyvą. 
// Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu 
// (per console.log arba per dar atskirą funkciją). 
// Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, 
// kiekvieną kartą perduodant skirtingą masyvą į ją.

function didziausias(skaiciuMasyvas) {
   let max = skaiciuMasyvas[0]

   for (const skaicius of skaiciuMasyvas) {
        if (skaicius > max) {
            max = skaicius
        }
   }
   console.log('Didžiausias rastas skaičius:',  max);
}

function atsitiktiniuGeneravimas(kiek, min, max, masyvas) {
    for (let i = 0; i < kiek; i++) {
        masyvas.push(Math.floor(Math.random() * (max - min))+ min)
    }
}

let skaiciai1 = []
let skaiciai2 = []
let skaiciai3 = []

atsitiktiniuGeneravimas (10, 5, 10, skaiciai1)
atsitiktiniuGeneravimas (5, 5, 10, skaiciai2)
atsitiktiniuGeneravimas (3, 1, 25, skaiciai3)

console.log('Pirmas masyvas:', skaiciai1);
console.log('Antras masyvas:', skaiciai2);
console.log('Trecias masyvas:', skaiciai3);

didziausias(skaiciai1);
didziausias(skaiciai2);
didziausias(skaiciai3);


