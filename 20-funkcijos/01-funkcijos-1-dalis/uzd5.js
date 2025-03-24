// Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. 
// Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą,
//  kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). 
// Iškvieskite šią funkciją keletą kartų.

function suma() {
    let skaicius1 = Math.floor((Math.random() * 10) + 1)
    let skaicius2 = Math.floor((Math.random() * 20) + 1)
    console.log(`${skaicius1} + ${skaicius2} = ${skaicius1 + skaicius2}`);
}

suma()
suma()
suma()

