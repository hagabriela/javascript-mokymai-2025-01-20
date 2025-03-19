let pirmas = ['a' , 'b' , 'c']
let antras = pirmas

console.log({pirmas, antras});

// jeigu noriu ištrinti viską iš pirmo, bet palikti kas yra
// antrame, tai tada trinu "sukuriant naują" masyvą
pirmas = []
// antras = []

console.log({pirmas, antras});

console.log('-----------');

let trecias = ['a' , 'b', 'c']

// jeigu noriu kad trynimo, atnaujinimo metu ar pan, šitie
// du masyvai nepriklausytų vienas nuo kito, tai jie
// ir turi būti sukurti kaip du atskiri masyvai

let ketvirtas = [...trecias]
// kopija pasidaroma, ne vienas ir tas pats masyvas

console.log({trecias, ketvirtas})

trecias.length = 0;
// kitas trinimo metodas

console.log({trecias, ketvirtas})

