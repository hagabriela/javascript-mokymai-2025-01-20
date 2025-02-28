// + ženklas elgiasi skirtingai:
// su string kintamaisiais jis juos sujungia
// su number kintamaisiais jis juos suskaičiuoja

console.log('medis' + 'namas'); // medisnamas (JUNGIA)
console.log(10 + 5); // 15 (SKAIČIUOJA)

console.log('medis' + 10 + 5); // medis105 (JUNGIA)
console.log(10 + 5 + 'medis'); // 15medis (SKAIČIUOJA IR JUNGIA)

console.log('medis' + (10 + 5)); // medis15 (SKAIČIUOJA IR JUNGIA)
console.log('medis', 10 + 5); // medis 15 (SKAIČIUOJA IR JUNGIA)
console.log(`medis ${10 + 5}`); // medis 15 (SKAIČIUOJA IR JUNGIA)

let skaicius = '10';
console.log(typeof skaicius); // string

console.log(typeof ('medis' + 'namas')); // string
console.log(typeof ('10' + '20')); // string

// if (typeof skaicius == 'number') {
//     console.log(skaicius * 2)
// } else {
//     console.log('Tai ne skaicius!!!!!')
// } kur dar typeof naudojamas