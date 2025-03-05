let centimetru = 100
let konvertuoti = 'm' // mm, m, km, ...

console.log('Centimetrais dabar turime:' , centimetru);

switch (konvertuoti) {
    case 'mm':
        console.log('Milimetrais:' , centimetru * 10);
        break;
    case 'm':
        console.log('Metrais:' , centimetru / 100);
        break;
    case 'km':
        console.log('Kilometrais:' , centimetru / 100000);
        break;
    default: console.log('Įvyko klaida!');
}