// Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.

let kilometrai = [120, 145, 90, 300, 160]

console.log('Nuvažiuota daugiau nei 150 km:');

for (const kilometras of kilometrai) {
    if (kilometras > 150) {
        console.log(kilometras); 
    }
}