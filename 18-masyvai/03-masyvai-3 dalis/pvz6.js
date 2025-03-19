let kilometrai = [800, 600, 700, 1000, 200, 700]

let suma = 0

for (const kilometras of kilometrai) {
    console.log(kilometras);
    suma += kilometras
}

let vidurkis = suma / kilometrai.length

console.log('Viso nuvažiuota:' , suma , 'km');
console.log('Kelionė truko:' , kilometrai.length, 'dienas');
console.log('Vidutiniškai per dieną įveikta:' , vidurkis.toFixed(0) , 'km');


