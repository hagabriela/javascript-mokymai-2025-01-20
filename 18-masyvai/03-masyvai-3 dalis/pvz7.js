let ugiai = [1.87, 1.93, 2.3, 1.43, 2.1, 1.75, 1.88]

let aukstesni = []
let zemesni = []

for (const ugis of ugiai) {
    if (ugis >= 2) {
        aukstesni.push(ugis)
    } else {
        zemesni.push(ugis)
    }
}

console.log('Visi 2 metrų ar aukštesni:' , aukstesni);
console.log('Jų yra:' , aukstesni.length);
console.log();

console.log('Visi žemesni nei 2 metrai:' , zemesni);
console.log('Jų yra:' , zemesni.length);

