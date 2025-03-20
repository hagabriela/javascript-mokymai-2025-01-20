let pazymiai = [8, 2, 3, 7, 9]

// surasti pirmą neigiamą studento pažymį,
// jeigu toks yra

let pirmasNeigiamas = pazymiai.find(pazymys => pazymys < 5)
console.log('Pirmas neigiamas pažymys yra:', pirmasNeigiamas);

let visiNeigiami = pazymiai.filter(pazymys => pazymys < 5)
console.log('Visi neigiami pažymiai yra:', visiNeigiami);

// surasti pirmą aukštesnį pažymį (10),
// jeigu toks yra

let pirmas10 = pazymiai.find(pazymys => pazymys == 10)
console.log('Pirmas 10-tukas:', pirmas10);

let visi10 = pazymiai.filter(pazymys => pazymys == 10)
console.log('Visi 10-ukai:', visi10);

// pasakyti kuriame indekse yra pirmasis
// neigiamas pažymys, jeigu toks yra

let pirmasNeigiamasIndeksas = pazymiai.findIndex(pazymys => pazymys < 5)
console.log('Pirmo neigiamo pažymio indeksas yra:', pirmasNeigiamasIndeksas);

// pasakyti kuriame indekse yra pirmasis pažymys 10,
// jeigu toks yra

let pirmo10Indeksas = pazymiai.findIndex(pazymys => pazymys == 10)
console.log('Pirmas 10-tukas rastas indekse:', pirmo10Indeksas);