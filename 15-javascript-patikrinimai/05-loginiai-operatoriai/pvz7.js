// kad ir kiek sąlygų bus - visos jos turi būti teisingos
// if (salyga && salyga && salyga && ....)

// kad ir kiek sąlygų bus - bent viena iš jų turi būti teisinga
// if (salyga || salyga || salyga || ....)

// jeigu naudojan skirtingus operatorius - geriausia skirtingus ar jų poras apskliausti
// if (salyga && salyga || salyga)
// if ((salyga && salyga) || salyga)
// if (salyga && (salyga || salyga))

// ar žmogus uždirba bent 1000 eurų ir yra iš Kauno arba Vilniaus?

let atlyginimas = 400
let miestas = 'Vilnius'

if (atlyginimas >= 1000 && (miestas == 'Kaunas' || miestas == 'Vilnius')) {
    console.log('atitinka');
} else {
    console.log('neatitinka');
}