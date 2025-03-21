let kelione = {
    kryptis: 'Estija',
    data: '2025-07-02',
    lankytinosVietos: [
        'Saremos sala',
        'Talino senamiestis',
        '...'
    ]
}

console.log(`${kelione.kryptis} (${kelione.data})`);

console.log('Lankytinos vietos:');

for (const vieta of kelione.lankytinosVietos) {
    console.log('-', vieta);
}


