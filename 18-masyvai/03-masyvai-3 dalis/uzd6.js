// Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.

let markes = ['Audi' , 'BMW' , 'Toyota' , 'Nissan']

for (const marke of markes) {
    console.log(`Markė ${marke}, kurią sudaro ${marke.length} raidžių`); 
}