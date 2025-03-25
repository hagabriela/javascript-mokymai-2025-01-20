let skaiciai = [1, 2, 3, 4];

let objektai = skaiciai.map(n => {reiksme: n});
console.log('pakeista i objektus', objektai);

let objektai2 = skaiciai.map(n => ({reiksme: n}));
console.log('pakeista i objektus', objektai2);
