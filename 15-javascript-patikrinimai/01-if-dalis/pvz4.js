let preke1 = 130;
let preke2 = 20;
let preke3 = 50;

// jeigu bendras krepšelis yra 150 ar daugiau, taikome 10% nuolaidą
// if (preke1 + preke2 + preke3 >= 150) {
//     // taikau nuolaidą
// }

let bendraKaina = preke1 + preke2 + preke3;
let nuolaida = 0; // SUKŪRIMAS

if (bendraKaina >= 150) {
    console.log('Taikoma 10% nuolaida');
    nuolaida = bendraKaina - bendraKaina * 0.9; // ATNAUJINIMAS
    bendraKaina = bendraKaina * 0.9;
}

console.log('Nuolaida:', nuolaida, '€'); // IŠVEDIMAS
console.log('Galutinė kaina:', bendraKaina, '€');
