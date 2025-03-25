let data = '2015-01-08'
console.log(data);

let dabar = new Date()
console.log(dabar);

let data2 = new Date('2015-01-08')
console.log(data2)

let data3 = new Date(2015, 0, 8, 10, 0)
console.log(data3);

console.log('mėnesis:', dabar.getMonth() + 1);
console.log('diena:', dabar.getDate());
console.log('savaitės diena:', dabar.getDay());

console.log('lietuviškas formatas:', dabar.toLocaleDateString('lt'));
console.log('angliškas formatas:', dabar.toLocaleDateString('en-GB'));
console.log('amerikoniškas formatas:', dabar.toLocaleDateString('en-US'));

console.log('pilnas lt formatas:', dabar.toLocaleString('lt'));


