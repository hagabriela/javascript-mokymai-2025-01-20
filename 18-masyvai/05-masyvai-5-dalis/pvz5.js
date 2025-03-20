let vardai = [
    'Jolanta',
    'Gintarė',
    'Ugnė',
    'Povilas',
    'Inga',
    'Petras'
]

// atrinkti vardus, kurie prasideda raide P

// let prasidedaP = vardai.filter(vardas => vardas[0] == 'P')
let prasidedaP = vardai.filter(vardas => vardas.startsWith('P'))
console.log('Vardai, prasidedantys P:', prasidedaP.join(', '));

// atrinkti vardus kurių raidžių kiekis yra
// 6 simboliai ar mažiau

// parodo, kiek kiekvienas vardas turi simbolių
vardai.forEach(vardas => {
    console.log(`${vardas} turi ${vardas.length} simbolių`);
})

let maziauSimboliu = vardai.filter(vardas => vardas.length <= 6)
console.log('Vardai su 6 raidėm ar mažiau:', maziauSimboliu.join(', '));

// atrinkti vardus kurie pasibaigia raide A

let pasibaigiaA = vardai.filter(vardas => vardas.endsWith('a'))
// let pasibaigiaA = vardai.filter(vardas => vardas.toLocaleLowerCase().endsWith('a'))
console.log('Vardai, pasibaigiantys a:', pasibaigiaA.join(', '));

// atrinkti vardus kurie prasideda raide U
// arba I

let prasidedaUarbaI = vardai.filter(vardas => {
    return vardas.startsWith('U') || vardas.startsWith('I')
})
console.log('Vardai, prasidedantys U arba I:', prasidedaUarbaI.join(', '));

