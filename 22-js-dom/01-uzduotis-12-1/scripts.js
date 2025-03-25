// pirmas div

document.getElementById('pirma-antraste').innerHTML = 'Naujas pirmos antraštės tekstas'
document.getElementById('pirmas-paragrafas').innerHTML = 'Naujas pakeistas pirmo paragrafo tekstas'

// antras div

console.log('ANTRAS DIV');

let tekstasIsParagrafo = document.getElementById('paragrafo-tekstas').innerHTML
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo);

let tekstasIsParagrafo2 = document.getElementById('paragrafo-tekstas').innerHTML
console.log('paimtas su innerHTML tekstas:', tekstasIsParagrafo2);

console.log();

// antras div

console.log('TRECIAS DIV');

console.log('innerHTML turinys:', document.getElementById('trecias').innerHTML);
console.log('innerText turinys:', document.getElementById('trecias').innerText);

console.log();

// septintas div

function pakeisti() {
    document.getElementById('septinto-tekstas').innerHTML = 'naujas tekstas'
}

// astuntas div

function pakeisti2(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas
}

// devintas div

function pakeisti3(elementas, tekstas) {
    document.getElementById(elementas).innerHTML = tekstas
}

function kitaSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva
}

// desimtas div

let pirmas = 8
let antras = 9

let suma = pirmas + antras
let skirtumas = pirmas - antras
let sandauga = pirmas * antras
let dalmuo = pirmas / antras

document.getElementById('suma').innerHTML = pirmas + '+' + antras + '=' + suma
document.getElementById('skirtumas').innerHTML = pirmas + '-' + antras + '=' + skirtumas
document.getElementById('sandauga').innerHTML = pirmas + '*' + antras + '=' + sandauga
document.getElementById('dalmuo').innerHTML = pirmas + '/' + antras + '=' + dalmuo

// vienuoliktas div

pirmas = 7
antras = 5

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
                <p>${pirmas} - ${antras} = ${pirmas - antras}</p>
                <p>${pirmas} * ${antras} = ${pirmas * antras}</p>
                <p>${pirmas} / ${antras} = ${pirmas / antras}</p>`

document.getElementById('vienuolikto-turinys').innerHTML = isvedimui

// dvyliktas div

function keistiSpalva(elementas, spalva) {
    document.getElementById(elementas).style.color = spalva
}

function keistiDydi(elementas, dydis) {
    document.getElementById(elementas).style.fontSize = dydis + 'px'
}

// tryliktas div

let divKeitimui = document.getElementById('div-keitimui')

let plocioSlider = document.getElementById('plocio-slider')
let aukscioSlider = document.getElementById('aukscio-slider')

plocioSlider.oninput = function() {
    divKeitimui.style.width = this.value + 'px'
}

aukscioSlider.oninput = function() {
    divKeitimui.style.height = this.value + 'px'
}

let spalvosPasirinkimas = document.getElementById('spalvos-pasirinkimas')

spalvosPasirinkimas.oninput = function() {
    divKeitimui.style.backgroundColor = this.value
}

let tekstoSpalvosPasirinkimas = document.getElementById('teksto-spalvos-pasirinkimas')

tekstoSpalvosPasirinkimas.oninput = function() {
    divKeitimui.style.color = this.value
}

let tekstasDivui = document.getElementById('tekstas-divui')

tekstasDivui.oninput = function() {
    divKeitimui.innerHTML = this.value
}

// keturioliktas div

function pridetiZodi(elementas, zodis) {
    document.getElementById(elementas).value += zodis + " "
}

// penkioliktas div

let penkioliktoTekstas = document.getElementById('penkiolikto-tekstas')

function zodziuKiekis() {
    let tekstas = penkioliktoTekstas.value
    let zodziai = tekstas.trim().split(' ')
    document.getElementById('penkiolikto-atsakymai').innerHTML = 
    `<p>Žodžių kiekis: ${zodziai.length}</p>`
}

function ilgiausiasZodis() {
    let tekstas = penkioliktoTekstas.value
    let zodziai = tekstas.trim().split(' ')

    let ilgiausias = ''

    for (const zodis of zodziai) {
        if (zodis.length > ilgiausias.length) {
            ilgiausias = zodis
        }
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML = 
    `<p>Ilgiausias žodis: ${ilgiausias}</p>
    <p>Jo ilgis: ${ilgiausias.length} simbolių.</p>`
}

function trumpiausiasZodis() {
    let tekstas = penkioliktoTekstas.value
    let zodziai = tekstas.trim().split(' ')

    let trumpiausias = zodziai[0]

    for (const zodis of zodziai) {
        if (zodis.length < trumpiausias.length) {
            trumpiausias = zodis
        }
    }

    document.getElementById('penkiolikto-atsakymai').innerHTML = 
    `<p>Trumpiausias žodis: ${trumpiausias}</p>
    <p>Jo ilgis: ${trumpiausias.length} simbolių.</p>`
}

// sesioliktas div

let pirmoSkirtukoTurinys = document.getElementById('pirmas-skirtukas')
let antroSkirtukoTurinys = document.getElementById('antras-skirtukas')

function pirmasSkirtukas() {
    pirmoSkirtukoTurinys.style.display = 'block'
    antroSkirtukoTurinys.style.display = 'none'
}

function antrasSkirtukas() {
    pirmoSkirtukoTurinys.style.display = 'none'
    antroSkirtukoTurinys.style.display = 'block'
}

// septynioliktas div

let perjungtiMygtukas = document.getElementById('perjungti-mygtukas')
let perjungtiTekstas = document.getElementById('perjungti-tekstas')

perjungtiMygtukas.onclick = function() {
    if (this.innerText == 'Rodyti') {
        this.innerText = 'Nerodyti'
        perjungtiTekstas.style.display = 'block'
    } else {
        this.innerText = 'Rodyti'
        perjungtiTekstas.style.display = 'none'
    }
}

// astuonioliktas div

let kitasPerjungtiTekstas = document.getElementById('kitas-perjungti-tekstas')

document.getElementById('kitas-perjungti-mygtukas').onclick = function() {
    if (kitasPerjungtiTekstas.style.display == 'block') {
        this.innerText = 'Rodyti'
        kitasPerjungtiTekstas.style.display = 'none'
    } else {
        this.innerText = 'Nerodyti'
        kitasPerjungtiTekstas.style.display = 'block'
    }
}

// devynioliktas div

document.getElementById('devyniolikto-tekstas').onclick = function() {
    this.style.display = 'none'
}

// dvidesimtas div

let nuspalvintiDaugiauNei100Mygtukas = document.getElementById('nusispalvinti-daugiau-nei-100')
let blokeliai = document.querySelectorAll('.blokelis')

nuspalvintiDaugiauNei100Mygtukas.onclick = function() {
    blokeliai.forEach(function(blokas) {
        let tekstas = blokas.textContent.trim()
        if (tekstas.length > 100) {
            blokas.classList.add('ilgas-tekstas')
        } else {
            blokas.classList.remove('ilgas-tekstas')
        }
    })
}

// dvidesimtpirmas div

let pirmasSkaicius = document.getElementById('skaicius1')
let antrasSkaicius = document.getElementById('skaicius2')

let mygtukasPaskaiciuoti = document.getElementById('paskaiciuoti')

mygtukasPaskaiciuoti.onclick = function() {
    let pirmasSkaiciusReiksme = parseFloat(pirmasSkaicius.value);
    let antrasSkaiciusReiksme = parseFloat(antrasSkaicius.value);

    let paskaiciavimoIsvedimas = `<p>${pirmasSkaiciusReiksme} + ${antrasSkaiciusReiksme} = ${pirmasSkaiciusReiksme + antrasSkaiciusReiksme}</p>
                <p>${pirmasSkaiciusReiksme} - ${antrasSkaiciusReiksme} = ${pirmasSkaiciusReiksme - antrasSkaiciusReiksme}</p>
                <p>${pirmasSkaiciusReiksme} * ${antrasSkaiciusReiksme} = ${pirmasSkaiciusReiksme * antrasSkaiciusReiksme}</p>
                <p>${pirmasSkaiciusReiksme} / ${antrasSkaiciusReiksme} = ${pirmasSkaiciusReiksme / antrasSkaiciusReiksme}</p>`

    document.getElementById('skaiciavimu-atsakymai').innerHTML = paskaiciavimoIsvedimas
}

// dvidesimtantras div

// Paėmame reikalingus elementus
let atidarytiModalMygtukas = document.getElementById("atvertiModal");
let modalas = document.getElementById("modalas");
let uzdarytiModalMygtukas = document.getElementById("uzdarytiModal");

// Kai paspaudžiama "Atidaryti modalą", rodomas modalas
atidarytiModalMygtukas.onclick = function() {
    modalas.style.display = "block";
}

// Kai paspaudžiama "X" mygtukas, uždaromas modalas
uzdarytiModalMygtukas.onclick = function() {
    modalas.style.display = "none";
}

// Jei paspaudžiamas už lango srities (už modal) taip pat uždaromas modalas
window.onclick = function(event) {
    if (event.target === modalas) {
        modalas.style.display = "none";
    }
}


