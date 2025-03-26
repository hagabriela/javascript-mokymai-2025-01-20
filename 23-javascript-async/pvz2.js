// funkcija yra asinchroninė, kas reiškia - joje yra užduočių,
// kurios trunka daugiau laiko, o tos užduotys turi prierašą await,
// nes await sako "laukiam"

async function gautiDuomenys() {
    // laukiam kol nuskaitysim duomenis iš failo
    let rezultatas = await fetch ('duomenys.json')

    // laukiam kol tuos duomenis konvertuos į javascriptą
    // čia jau ne kaip .json, o kaip objektus ir masyvus matys
    let duomenys = await rezultatas.json()

    // atiduodam galutinai sutvarkytus ir sukonvertuotus duomenis
    return duomenys
}

console.log('čia kažką pradėjau');

// asinchroninėFunkcija().then(funkcija_callback)
// startuojamVykdymą().then(kąDaromeGavęRezultatus)

// čia funkcija callback
// kaGavome - return duomenys
gautiDuomenys().then(kaGavome => {
    console.log('gavome duomenis');
    console.log(kaGavome);
    console.log('Kiekis:', kaGavome.length);
})

console.log('čia kažką pabaigiau');

