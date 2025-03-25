function atsitiktinisSkaicius(min, max) {
    let skaicius = Math.floor(Math.random() * (max - min)) + min
    // console.log(skaicius);
    return skaicius
}

// šitaip nieko nebus, nes funkcijoje yra return, o jis
// pats iš savęs nesako ką darom su ta informacija, pvz
// ar išvedame, todėl šitos funkcijos rezultatą turime
// pasiimti kaip kintamojo reikšmę ir kažkur galbūt pasidėti
// ar iškart panaudoti:
// atsitiktinisSkaicius(1, 100)
// aukščiau parašytą eilutę galim įsivaizduoti lyg tiesiog
// parašytume bet kokį skaičių taip kažkaip:
// 87

let atsakymas = atsitiktinisSkaicius(1, 100)
console.log('Gautas skaičius:', atsakymas);
