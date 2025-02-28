let krepselis = 23
let siuntimas = 3

// jeigu krepšelyje žmogus yra susidėjęs prekių už 30 eurų
// ar daugiau, tada siuntimas taikomas NEMOKAMAS

if (krepselis >= 30) {
    siuntimas = 0;
}

let galutineKaina = krepselis+siuntimas
console.log('Galutinė kaina:' , galutineKaina, '€');
