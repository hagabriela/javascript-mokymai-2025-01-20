let pirmas = ['a' , 'b' , 'c']
// let antras = pirmas // vienas masyvas
// let antras = [...pirmas] // du masyvai
let antras = pirmas.slice() // du masyvai, nenurodant, kopijuoja viska

console.log({pirmas, antras});

pirmas[1] = 'd'
// abiejuose b raide pasikeite i d

console.log({pirmas, antras});
