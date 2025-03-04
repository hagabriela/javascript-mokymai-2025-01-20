let failas; // undefined
// let failas = undefined
// let failas = 'dokumentai/duomenys.json'
// let failas = 'dokumentai/duomenys.pdf'

if (failas == undefined) {
    console.log('KLAIDA! Prašome nurodyti failą');
} else if (failas.endsWith('.txt')) {
    console.log('Nuskaitomas tekstinis failas');
} else if (failas.endsWith('.json')) {
    console.log('Nuskaitomas JSON failas');
} else if (failas.endsWith('.csv')) {
    console.log('Nuskaitomas CSV failas');
} else {
    console.log('KLAIDA! Nurodytas netinkamas failas');
}