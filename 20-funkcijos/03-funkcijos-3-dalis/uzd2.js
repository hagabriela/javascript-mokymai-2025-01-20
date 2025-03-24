// Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. 
// Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą
//  ir jį padalintą iš dviejų. 
// Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. 
// Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.

function paskaiciuotiSkaiciai(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        let kvadratas = masyvas[i] ** 2;
        let padalintaIsDvieju = kvadratas / 2;
        console.log(`${masyvas[i]} | Kvadratas: ${kvadratas} | Padalinta iš 2: ${padalintaIsDvieju}`);
    }
}

let skaiciai1 = [7, 9, 10, 50, 23]
let skaiciai2 = [80, 24, 2, 7, 29, 55]


paskaiciuotiSkaiciai(skaiciai1);
paskaiciuotiSkaiciai(skaiciai2);





