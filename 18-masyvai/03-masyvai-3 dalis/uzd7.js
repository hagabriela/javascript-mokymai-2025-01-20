// Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.

let klaidos = ['ui87' , '008', 'sys12']

for (const klaida of klaidos) {
    if (klaida == 'ui87') {
        console.log(klaida , 'Grafinės sąsajos klaida navigacijoje');
    } else if (klaida == '008') {
        console.log(klaida , 'Nežinoma sistemos klaida');
    } else if (klaida == 'sys12') {
        console.log(klaida , 'Trūksta operatyviosios atminties sistemoje');
    }
}
