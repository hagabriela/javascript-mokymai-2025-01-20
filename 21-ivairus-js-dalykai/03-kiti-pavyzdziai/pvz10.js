let skaiciai = [1, 2, 3, 4];

let objektai = skaiciai.map(x => {
    let obj = { reiksme: x };
    return obj;
});

console.log('pakeista i objektus', objektai);
