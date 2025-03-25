// Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių. 
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu norite būdu.

function atsitiktinisSkaicius(min, max) {
    let skaicius = Math.floor(Math.random() * (max - min)) + min
    return skaicius
}

let atsakymas = atsitiktinisSkaicius(5, 300)
console.log('Gautas skaičius:', atsakymas);
let atsakymas2 = atsitiktinisSkaicius(3, 28)
console.log('Gautas skaičius:', atsakymas2);
let atsakymas3 = atsitiktinisSkaicius(1, 10)
console.log('Gautas skaičius:', atsakymas3);


