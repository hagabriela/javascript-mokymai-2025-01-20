let maistas = 'Kebabo komplektas'
let kaina = 4.5
let kiekis = 3
let arJauPagamintas = true

console.log('----------------------')
console.log(maistas);
console.log(kaina);
console.log(kiekis);
console.log(arJauPagamintas);
console.log('----------------------')
console.log('Užsakytas maistas:' , maistas);
console.log('Kaina:' , kaina, '$');
console.log('Kiekis:' , kiekis, 'vnt.');
console.log('Ar jau pagamintas?' , arJauPagamintas);
console.log('----------------------')
console.log('Užsakytas maistas: ' + maistas);
console.log('Kaina už vnt.: ' + kaina + ' $ (' + kiekis + ' vnt.)');
console.log('Ar jau pagamintas? ' + arJauPagamintas);
console.log('----------------------')
// pirmam ir antram galima buvo geriau su ,
console.log(`Užsakytas maistas: ${maistas}`);
console.log(`Kaina už vnt.: ${kaina} $ (${kiekis} vnt.)`);
// console.log(`Kaina už vnt.: ____ € (_____ vnt.)`)
console.log(`Ar jau pagamintas? ${arJauPagamintas}`);
console.log('----------------------')

let galutineKaina = kaina * kiekis
console.log('Galutine kaina:' , galutineKaina, '$');
console.log('----------------------')

