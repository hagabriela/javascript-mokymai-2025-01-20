let amzius = 20
let pinigai = 50
let arYraVietos = true

if (arYraVietos == true) {

    if (amzius <18) {
        console.log('Soriukas, neatitinkate amžiaurs reikalavimų');
    } else if (pinigai >= 10) {
        console.log('Galite pirkti bilietą ir įeiti');
    } else if (pinigai < 10) {
        console.log('Soriukas, neįperkate');
    }

} else if (arYraVietos == false) {
    console.log('Deja, viskas jau išparduota');
}