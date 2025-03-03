// KLAUSIMAS ? TAIP : NE

let taskai = 148

if (taskai >= 100) {
    console.log('Jūs skaitotės kaip gold klientas');    
}

if (taskai < 100) {
    console.log('Jūs skaitotės kaip silver klientas');
}

console.log('-------------------------------');

console.log('Jūs skaitotės kaip', taskai >= 100 ? 'gold' : 'silver' , 'klientas');

console.log('-------------------------------');

let tipas = taskai >= 100 ? 'gold' : 'silver'
console.log('Jūs skaitotės kaip',  tipas, 'klientas');

// let tipas = ''
// if (taskai >= 100) {
//    tipas = 'gold';
//}
// if (taskai < 100) {
//    tipas = 'silver';
//}
