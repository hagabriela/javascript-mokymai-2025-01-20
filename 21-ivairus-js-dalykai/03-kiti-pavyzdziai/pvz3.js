let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 21 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 19 },
];
console.log('zmones', zmones);

let rastasZmogus2 = zmones.find(zmogus => zmogus.vardas === 'Paulius');
console.log('rastas zmogus', rastasZmogus2);