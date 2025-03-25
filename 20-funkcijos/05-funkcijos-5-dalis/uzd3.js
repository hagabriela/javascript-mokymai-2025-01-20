// Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. 
// Ji turėtų patikrinti ar visi pažymiai teigiami: 
// jei visi teigiami turėtų grąžintų true kaip atsakymą, 
// o jei yra bent vienas neigiamas - false. 
// Susikurkite du pažymių masyvus. 
// Iškvieskite šią funkciją du kartus, abu kartus perduodant skirtingus masyvus. 
// Gautus atsakymus paverskite į tekstą 
// (jeigu gavote true - išveskite tekstą 'visi studento pažymiai teigiami', 
// jei false - 'studentas turi bent vieną neigiamą pažymį'). 
// Šiam iškonvertavimui iš true/false į tekstą galite pamėginti pasikurti atskirą funkciją, 
// jai perduoti kitos funkcijos atsakymą.

function teigiami(pazymiuMasyvas) {
    return pazymiuMasyvas.every(pazymys => pazymys >= 5)
}

function konvertavimas(arTeigiami) {
    return arTeigiami ? 'Visi studento pažymiai teigiami' : 'Studentas turi bent vieną neigiamą pažymį';
}


let pazymiai1 = [10, 5, 7, 8, 3]
let pazymiai2 = [10, 9, 9, 10]

console.log(konvertavimas(teigiami(pazymiai1)));
console.log(konvertavimas(teigiami(pazymiai2)));


