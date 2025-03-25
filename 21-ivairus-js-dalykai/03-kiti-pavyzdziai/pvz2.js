let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },
];
console.log('zmones', zmones);

let rastasZmogus1 = zmones.find(zmogus => {
    return zmogus.vardas === 'Paulius'
});
console.log('rastas zmogus', rastasZmogus1);