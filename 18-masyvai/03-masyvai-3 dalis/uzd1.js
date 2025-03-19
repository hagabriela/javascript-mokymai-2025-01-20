// Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …

let zodziai = ['medis' , 'tvora' , 'automobilis' , 'šaka']

for (const indeksas in zodziai) {
    console.log(`${indeksas} - ${zodziai[indeksas]}`);
}