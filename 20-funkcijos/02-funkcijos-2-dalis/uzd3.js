// Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis 
// (markė, modelis, gamybos metai, darbinis tūris). 
// Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. 
// Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.


function auto(marke, modelis, metai, turis) {
    console.log(`${marke} ${modelis}, kuris yra pagamintais ${metai} metais ir kurio darbinis tūris yra ${turis}`);
}

auto('Audi', 'A6', 2023, 2.2)
auto('Nissan', 'Juke', 2012, 1.6)
