let paslaugosTiekejas = {
    imone: 'MB Paslauga',
    ikurimas: 2005,
    sunuVedziojimas: {
        valandinis: 10,
        daugiausiaiSunu: 15,
    },
    sunuKirpimas: {
        kaina: {
            nuo: 10,
            iki: 20,
        },
        daugiausiaiSunu: 1,
    },
    darbuotojai: [
        'Jonas Jonauskas',
        'Ona Onauskienė'
    ]
}

console.log(paslaugosTiekejas);
console.log(paslaugosTiekejas.imone);
console.log(paslaugosTiekejas.ikurimas);

console.log(paslaugosTiekejas.sunuKirpimas);
console.log(paslaugosTiekejas.sunuKirpimas.daugiausiaiSunu);

console.log(paslaugosTiekejas.darbuotojai);
console.log(paslaugosTiekejas.darbuotojai[1]);






