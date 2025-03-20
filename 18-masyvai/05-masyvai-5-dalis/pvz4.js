let pazymiai = [10, 8, 3, 4, 10, 2, 7, 9]

// kiek ir kokių neigiamių pažymių yra?

let neigiami = pazymiai.filter(pazymys => pazymys < 5)
console.log('Neigiami pažymiai', neigiami);
console.log('Neigiami pažymiai', neigiami.join(', '));
console.log('Neigiamų pažymių yra', neigiami.length);

// kiek yra puikių įvertinimu?
// kiek yra 10-ukų?

// galima kartoti pazymys, nes egzistuoja tik siame cikle
let puikus = pazymiai.filter(pazymys => pazymys == 10)
console.log('Puikūs pažymiai', puikus.join(', '));
console.log('Puikių įvertinimų yra', puikus.length);
