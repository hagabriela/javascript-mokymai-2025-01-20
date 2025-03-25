let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },
];
console.log('zmones', zmones);

let suformatuotiZmones = zmones.map(x => `${x.vardas} ${x.pavarde} (${x.amzius} m.)`);
console.log('suformatuoti zmones', suformatuotiZmones);
