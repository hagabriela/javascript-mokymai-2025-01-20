// rasti ar skaičius NEpatenka į rėžius

let skaicius = -5

if (skaicius <= 0 || skaicius >= 100) {
    console.log('skaičius nepatenka į rėžius');
} else {
    console.log('su skaičiumi viskas gerai');
}

if (!(skaicius > 0 && skaicius < 100)) {
    console.log('skaičius nepatenka į rėžius');
} else {
    console.log('su skaičiumi viskas gerai');
}

// jeigu skaicius yra -5
// if (!(skaicius > 0 && skaicius < 100)) {
// if (!(-5 > 0 && -5 < 100)) {
// if (!(FALSE && -5 < 100)) {
// if (!(FALSE && TRUE)) {
// if (!(FALSE)) {
// if (TRUE) {