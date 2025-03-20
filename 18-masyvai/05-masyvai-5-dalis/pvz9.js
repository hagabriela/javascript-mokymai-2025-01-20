let vardai = ['Jonas', 'Ona', 'Ogis', 'Angelė']

let ilgiai = vardai.map(vardas => vardas.length)
console.log('vardai:', vardai);
console.log('jų ilgiai:', ilgiai);

let surikiuoti = ilgiai.slice().sort((a, b) => b - a)
console.log('ilgiausio vardo simbolių kiekis:', surikiuoti[0])

let ilgiausioSimboliai = vardai.map(vardas => vardas.length).sort((a, b) => b - a)[0]
console.log('ilgiausio vardo simbolių kiekis:', ilgiausioSimboliai)

let ilgVardai = vardai.filter(vardas => vardas.length == ilgiausioSimboliai)
console.log('ilgiausi vardai:', ilgVardai.join(', '))

let ilgiausiasVardas = vardai[0]

for (const vardas of vardai) {
    if (vardas.length > ilgiausiasVardas.length) {
        ilgiausiasVardas = vardas
    }
}
console.log('ilgiausias vardas:', ilgiausiasVardas)
console.log('jo simbolių kiekis:', ilgiausiasVardas.length)

    