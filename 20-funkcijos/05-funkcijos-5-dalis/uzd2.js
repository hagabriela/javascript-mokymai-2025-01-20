// Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. 
// Ji turėtų rasti ir grąžinti ilgiausią žodį masyve. 
// Už funkcijos ribų susikurkite žodžių masyvą. 
// Iškvieskite funkciją perduodant jai žodžių masyvą.
//  Gautą atsakymą išveskite, taip pat, nurodykite šio žodžio ilgį.

function ilgiausias(zodziuMasyvas) {
    let max = zodziuMasyvas[0]

    for (const zodis of zodziuMasyvas) {
        if (zodis.length > max.length) {
            max = zodis
        }
    }
    return max
}

let zodziai = ['medis', 'saulė', 'tulpė', 'kiaušinis']
let ilgiausiasZodis = ilgiausias(zodziai)

console.log(`${zodziai} ilgiausias žodis yra ${ilgiausiasZodis}, kurio ilgis yra ${ilgiausiasZodis.length} raidės`);