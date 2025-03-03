let miestas = 'Vilnius'

if (miestas.startsWith('K')) {
    console.log('Miesto pavadinimas prasideda raide K');
    // Vilnius
    // K
    // ^
} else if (miestas.startsWith('V')) {
    console.log('Miesto pavadinimas prasideda raide V');
}

if (miestas.toUpperCase().startsWith('K')) {
    // miestas.toUpperCase().startsWith('K')
    // 'vilnius'.toUpperCase().startsWith('K')
    // 'VILNIUS'.startsWith('K')
    // false
    console.log('Miesto pavadinimas prasideda raide K');
} else if (miestas.toUpperCase().startsWith('V')) {
    console.log('Miesto pavadinimas prasideda raide V');
}
// tada nesvarbu mazosios ir didziosios raides. JS konvertuoja