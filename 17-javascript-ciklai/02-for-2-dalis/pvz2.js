let suma = 0

for (let skaicius = 1; skaicius <= 20; skaicius++) {
    if (skaicius % 3 == 0) {
        suma += skaicius
        console.log('skaičius' , skaicius, 'dalinasi iš 3');
    }
}

console.log('skaičių, kurie dalinasi iš 3 suma:' , suma);
