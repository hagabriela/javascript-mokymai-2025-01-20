let uzsakymoKaina = 12

if (uzsakymoKaina >= 30) {
    console.log('Jums taikomas nemokamas siuntimas');
    console.log('Galutinė kaina:' , uzsakymoKaina, '€');
} else {
    console.log('Jums taikomas mokamas siuntimas');
    console.log('Galutinė kaina:' , uzsakymoKaina + 3, '€');
}