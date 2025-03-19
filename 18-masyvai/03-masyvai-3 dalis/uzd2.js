// Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.

let pirkiniai = ['pienas' , 'duona' , 'žuvis' , 'jogurtas' , 'agurkai' , 'pomidorai']

for (const pirkinys of pirkiniai) {
    console.log(`- ${pirkinys}`);
}

console.log('Pirkinių yra sąraše:' , pirkiniai.length);