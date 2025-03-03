// 'Automobilis ___ ___ yra ___, nes pagamintas ____ metais, jis yra ____, nes jo kaina ____.'

let marke = 'Audi'
let modelis = 'A4'
let metai = 2005
let kaina = 3000

// let senumas = ''

// if (metai <= 2010) {
//     senumas = 'senas'
// }

// if (metai > 2010) {
//     senumas = 'apynaujis'
// }

let senumas = metai <= 2010 ? 'senas' : 'apynaujis'
let brangumas = kaina >= 10000 ? 'brangus' : 'ne baisiai brangus'

console.log(`Automobilis ${marke} ${modelis} yra ${senumas}, nes pagamintas ${metai} metais, 
    jis yra ${brangumas}, nes jo kaina ${kaina}.`);

//vietoj sito
console.log('----------------')
if (metai <= 2010) {
    if (kaina >= 10000) {
        console.log(`Automobilis ${marke} ${modelis} yra senas,
            nes pagamintas ${metai} metais,
            jis yra brangus, nes jo kaina ${kaina}.`)
    }
    if (kaina < 10000) {
        console.log(`Automobilis ${marke} ${modelis} yra senas,
            nes pagamintas ${metai} metais,
            jis yra ne baisiai brangus, nes jo kaina ${kaina}.`)
    }
}
if (metai > 2010) {
    if (kaina >= 10000) {
        console.log(`Automobilis ${marke} ${modelis} yra apynaujis,
            nes pagamintas ${metai} metais,
            jis yra brangus, nes jo kaina ${kaina}.`)
    }
    if (kaina < 10000) {
        console.log(`Automobilis ${marke} ${modelis} yra apynaujis,
            nes pagamintas ${metai} metais,
            jis yra ne baisiai brangus, nes jo kaina ${kaina}.`)
    }
}
