// Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. 
// Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. 
// Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.

function batai() {
    console.log('Mano batai buvo du');
}

function nerandu() {
    console.log('Vienas dingo nerandu');
}

function apjungta() {
    batai()
    nerandu()
}

apjungta()
