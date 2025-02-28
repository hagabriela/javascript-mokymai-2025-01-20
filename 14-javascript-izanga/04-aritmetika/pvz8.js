let kaina = 0

kaina += 2 //įdėjome prekę už 2 eurus. 0+2 = 2
kaina += 3 //įdėjome prekę už 3 eurus. 2+3 = 5
kaina += 2 * 5 // įdėjome 2 prekes, kurių kaina po 5 eurus. 5+(2*5)=15

kaina -= 2 //išėmėm prekę, kuri kainuoja 2 eurus 15. 15-2=13

let nuolaida = 5 //5% nuolaidos
kaina -= kaina * nuolaida / 100; // skaičiuojame nuolaidą pinigais ir taikome. 13*5/100=0.65. 13-0.65=12.35
console.log('galutinė krepšelio suma:', kaina) // kaina = kaina-0.65, kaina = 13-0.65 = 12.35

// ARBA
//  let nuolaidaProc = 5
// let nuolaida = kaina*nuolaidaProc / 100 //0.65

// kaina -= nuolaida