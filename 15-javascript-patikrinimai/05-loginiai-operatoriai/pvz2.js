// jeigu lygis yra senior ir dirba daugiau nei 10 metų - pasiūlyti įmonės akcijų
// jeigu kitas lygis, tuomet tiesiog pakelti atlyginimą per 10 procentų

let lygis = 'mid'
let metai = 5
let atlyginimas = 2500

if (lygis == 'senior' && metai >= 10) {
    console.log('Siūlome įmonės akcijų už 10 000 €');
} else {
    console.log('Dėkojame, kad esate su mumis');
    let perskaiciuota = (atlyginimas * 1.10).toFixed(2)
    console.log(`Vietoj dabartinės ${atlyginimas} € algos, siūlome: ${perskaiciuota} €`);
    
    // let perskaiciuota = atlyginimas * 1.10
    // console.log(`Vietoj dabartinės ${atlyginimas} € algos, siūlome: ${perskaiciuota.toFixed(2)} €`)
}