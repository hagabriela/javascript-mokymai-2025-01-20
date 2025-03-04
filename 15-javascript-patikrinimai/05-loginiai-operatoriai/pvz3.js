// įmonė siūlo tokias tinklalapių/sistemų kūrimo paslaugas:
// reprezentatyvus tinklalapis nuo 1000 eurų
// el. parduotuvė nuo 3000 eurų
// nedidelė sistema nuo 5000 eurų

let projektoTipas = 'eshop' //tinklalapis, sistema
let turimasBiudzetas = 2000

if (projektoTipas == 'tinklalapis' && turimasBiudzetas >= 1000) {
    console.log('Galime įgyvendinti jūsų tinklalapio viziją!');
} else if (projektoTipas == 'eshop' && turimasBiudzetas >= 3000) {
    console.log('Galime įgyvendinti jūsų el. parduotuvės viziją!');
} else if (projektoTipas == 'sistema' && turimasBiudzetas >= 5000) {
    console.log('Galime įgyvendinti jūsų sistemos viziją!');
} else {
    console.log('Atsiprašome, tačiau jūsų pasirinktos paslaugos, nurodytam biudžetui suteikti negalime');
}