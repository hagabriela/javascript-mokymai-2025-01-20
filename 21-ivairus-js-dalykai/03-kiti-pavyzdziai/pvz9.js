let zmones = [
    { vardas: 'Tomas', pavarde: 'Tomauskas', amzius: 20 },
    { vardas: 'Greta', pavarde: 'Gretauskiene', amzius: 20 },
    { vardas: 'Paulius', pavarde: 'Paulenas', amzius: 20 },
];
console.log('zmones', zmones);

let sarasui = zmones.map(x => `<li>${x.vardas} ${x.pavarde} (${x.amzius} m.)</li>`);
console.log('sarasui', sarasui);
