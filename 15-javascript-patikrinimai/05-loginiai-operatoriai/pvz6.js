// ar gali žmogus važiuoti autobusu?
// jeigu turi išsipirkęs nuolatinį
// arba jeigu turi lengvatą bei turi pinigų bilietui
// arba jeigu perka be lengvatos, tai tiesiog turi pinigų visai bilieto kainai

let arTuriNuolatini = true
let arTuriLengvata = false // LSP, pensininko pažymėjimas, ...
let pinigai = 0

if (arTuriNuolatini == true || (arTuriLengvata == true && pinigai >= 1) || pinigai >= 2) {
    console.log('taip, gali');
} else {
    console.log('ne, negali');
}