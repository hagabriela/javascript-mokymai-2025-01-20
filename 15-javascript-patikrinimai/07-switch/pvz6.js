// let failas; // undefined
// let failas = 'duomenys.json' // string
let failas = 'duomenys.pdf' // string

switch (failas) {
    case undefined: console.log('Prašome nurodyti failą'); break;
    case 'duomenys.json': 
        console.log('Nuskaitomas JSON failas'); 
        console.log('......'); 
        break;
    case 'duomenys.csv': 
        console.log('Nuskaitomas CSV failas'); 
        console.log('......'); 
        break;
    default: console.log('Nurodytas neteisingas failas');
}