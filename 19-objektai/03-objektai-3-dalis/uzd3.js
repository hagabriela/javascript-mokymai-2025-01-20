// Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. 
// Išveskite kiekvieno automobilio pavadinimą, metus ir 
// paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).

let automobiliai = [
    {
        marke: 'Audi',
        pavaruDeze: 'automatinė',
        metai: '2020',
    },
    {
        marke: 'Volvo',
        pavaruDeze: 'mechaninė',
        metai: '2003',
    },
    {
        marke: 'Nissan',
        pavaruDeze: 'automatinė',
        metai: '2024',
    }
]

let dabartiniaiMetai = new Date().getFullYear()
// console.log('Knygai metų:', dabartiniaiMetai - knyga.metai);

for (const automobilis of automobiliai) {
    console.log(`Automobilis ${automobilis.marke} yra ${automobilis.metai} metų, jo amžius yra ${dabartiniaiMetai - automobilis.metai} metai`);
}