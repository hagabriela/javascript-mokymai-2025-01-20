let miestai = ['Kaunas', 'Vilnius', 'Klaipėda']

console.log('Pirmas variantas');

// šitam variante jokių skliaustų negalim trumpinti,
// vienintelė išimtis nebent su { } skliaustais,
// kai už jų yra tik viena eilutė

for (const miestas of miestai) {
    console.log('-', miestas);
}

console.log('Antras variantas');

// galima console.log ideti ir i viena eilute arba neatitraukti nuo krasto,
// bet geriau atitraukti
// taip sunkiau skaityti nei pirmu variantu

for (const miestas of miestai) 
    console.log('-', miestas);

console.log('Trečias variantas');

// callbackfn:
// function(kintamasis) {}
// (kintamasis) => {}
// kintamasis => {}
// kintamasis => 
// () => {}
// (kintamasis, kitas) => {}

miestai.forEach(function(miestas) {
    console.log('-', miestas);
})

console.log('Ketvirtas variantas');

// jeigu nenoriu rašyti viso function su visais skliaustai,
// tai galima rašyti kintamąjį ir dėti rodyklę
// t.y. vietoj function(kintamasis) {}
// daryti (kintamasis) => {}

miestai.forEach((miestas) => {
    console.log('-', miestas);
})

console.log('Penktas variantas');

// jeigu turim vieną kintamąjį, galim išvengti () skliaustukų,
// bet jeigu neimam kintamojo ar jų yra daugiau nei 1, tada () būtini,
// pvz .sort((a, b) => ) - jam reikia dviejų kintamųjų,
// todėl skliaustai () būtini

miestai.forEach(miestas => {
    console.log('-', miestas);
})

console.log('Šeštas variantas');

// jeigu mūsų kodas telpa toj pačioj eilutėj ir jame viena komanda (pvz
// console.log ar kažkas kito), tai { } skliaustų galime atsisakyti

miestai.forEach(miestas => console.log('-', miestas));




