// Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

let zodziai = ['medis' , 'namas' , 'saulė' , 'jūra']

let atrinkti = []

console.log('Visi žodžiai', zodziai);

for (const zodis of zodziai) {
    if (zodis.length < 5) {
        atrinkti.push(zodis)
    } 
}

console.log('Atrinkti žodžiai:' , atrinkti);
