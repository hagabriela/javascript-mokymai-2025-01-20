let marke1 = 'Audi'
let modelis1 = 'A4'
let metai1 = 2010
let rida1 = 320000

let marke2 = 'Volvo'
let modelis2 = 'S60'
let metai2 = 2012
let rida2 = 240000

console.log(`${marke1} ${modelis1} (${metai1} m.) nuvažiavo ${rida1} km`)
console.log(`${marke2} ${modelis2} (${metai2} m.) nuvažiavo ${rida2} km`)

console.log();

let auto1 = ['Audi', 'A4', 2010, 320000]
let auto2 = ['Volvo', 'S60', 2012, 240000]
console.log(`${auto1[0]} ${auto1[1]} (${auto1[2]} m.) nuvažiavo ${auto1[3]} km`)
console.log(`${auto2[0]} ${auto2[1]} (${auto2[2]} m.) nuvažiavo ${auto2[3]} km`)

console.log();

let auto1ob = { marke: 'Audi', modelis: 'A4', metai: 2010, rida: 320000}
let auto2ob = { marke: 'Volvo', modelis: 'S60', metai: 2012, rida: 240000}
console.log(`${auto1ob['marke']} ${auto1ob['modelis']} (${auto1ob['metai']} m.) nuvažiavo ${auto1ob['rida']} km`)
console.log(`${auto2ob['marke']} ${auto2ob['modelis']} (${auto2ob['metai']} m.) nuvažiavo ${auto2ob['rida']} km`)

console.log(`${auto1ob.marke} ${auto1ob.modelis} (${auto1ob.metai} m.) nuvažiavo ${auto1ob.rida} km`)
console.log(`${auto2ob.marke} ${auto2ob.modelis} (${auto2ob.metai} m.) nuvažiavo ${auto2ob.rida} km`)

// objektoPavadinimas['raktas']
// objektoPavadinimas.raktas
// let objektas = { raktas: reiksme, raktas: reiksme }
