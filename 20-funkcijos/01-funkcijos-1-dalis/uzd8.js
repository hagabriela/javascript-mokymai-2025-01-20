// Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. 
// Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. 
// Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.

function atsitiktinis() {
    let skaicius = Math.floor((Math.random() * 10) + 1)
    console.log('Atsitiktinis skaičius:', skaicius);
}

for (let i = 0; i < 10; i++ ) {
    atsitiktinis()
}
