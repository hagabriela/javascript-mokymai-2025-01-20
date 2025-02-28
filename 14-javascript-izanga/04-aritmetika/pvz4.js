// Įsisavaizduokim, kad norim nuvažiuoti 3000 km atstumą.
// Mūsų automobilis valgo vidutiniškai 7 l degalų 100 km.
// Kaina už 1 l degalų yra 1.8 Eur.
// Parašykite skriptą, kuris apskaičiuotų kiek pinigų mums
// reikės and degalų, norint nuvažiuoti 3000 km.
// Rezultatą išveskite konsolėje.

let atstumas = 3000
let kuroSanaudos = 7 // 100km
let degaluKaina = 1.8 // 1 l

let pinigai = atstumas / 100 * kuroSanaudos * degaluKaina
console.log(pinigai);
