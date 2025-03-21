let knyga = {
    pavadinimas: 'Haris Poteris',
    autorius: 'J.K. Rowling',
    metai: 2001,
    leidykla: 'Kažkas',
    puslapiai: 250,
    kaina: 19.99
}

console.log('Knyga:', knyga.pavadinimas);
console.log('Dabar kainuoja:' , knyga.kaina, '€');

let dabartiniaiMetai = new Date().getFullYear()
console.log('Knygai metų:', dabartiniaiMetai - knyga.metai);

if (knyga.kaina < 10) {
    console.log(`Knyga "${knyga.pavadinimas}" kainuoja pigiai.`);   
} else if (knyga['kaina'] < 20) {
    console.log(`Knyga "${knyga.pavadinimas}" kainuoja vidutiniškai.`);   
} else {
    console.log(`Knyga "${knyga.pavadinimas}" kainuoja brangiai.`);   
}
