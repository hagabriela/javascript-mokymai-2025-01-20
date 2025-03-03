let siuntimoBudas = 'pastomatas'
let siuntosDydis = 'm'

if (siuntimoBudas == 'pastomatas') {

    console.log('Pasirinkitas siuntimo būdas: paštomatas');

    if (siuntosDydis == 's') {
        console.log('Siuntimo kaina: 1.49 €');
    } else if (siuntosDydis == 'm') {
        console.log('Siuntimo kaina: 2.99 €');
    } else if (siuntosDydis == 'l') {
        console.log('Siuntimo kaina: 6.99 €');
    }

} else if (siuntimoBudas == 'kurjeris') {

    console.log('Pasirinktas siuntimo būdas: kurjeris');

    if (siuntosDydis == 's') {
        console.log('Siuntimo kaina: 3.49 €');
    } else if (siuntosDydis == 'm') {
        console.log('Siuntimo kaina: 4.99 €');
    } else if (siuntosDydis == 'l') {
        console.log('Siuntimo kaina: 8.99 €');
    }
}