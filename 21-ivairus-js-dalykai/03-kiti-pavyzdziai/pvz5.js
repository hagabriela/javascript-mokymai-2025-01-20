let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },
];
console.log('zmones', zmones);

let nerastasZmogus = zmones.find(zmogus => zmogus.vardas === 'Jaronimas');
console.log('zmogus nerastas', nerastasZmogus);
