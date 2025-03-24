// Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, 
// funkcijoje išveskite tekstą labas ir gautą vardą. 
// Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 
// 'viso gero' ir patį vardą. 
// Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. 
// Iškvieskite abi funkcijas, perduodant kintamąjį joms.

function pasisveikinti(vardas) {
    console.log('Labas,', vardas);
}

pasisveikinti('Gabriela')

function atsisveikinti(vardas) {
    console.log('Viso gero,',  vardas);
}

atsisveikinti('Gabriela')

let zmogus1 = 'Ona'

pasisveikinti(zmogus1)
atsisveikinti(zmogus1)


