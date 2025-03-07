// alert('labas')

// ================================
// skaiciu-didinimas zona
// ================================

let skaiciuDidinimasMygtukas = document.querySelector('.skaiciu-didinimas button')
// console.log(skaiciuDidinimasMygtukas);

skaiciuDidinimasMygtukas.addEventListener('click' , function() {
    // alert('paspaudei!')
    let skaicius = parseInt(skaiciuDidinimasMygtukas.textContent)
    skaicius++
    // console.log(typeof skaicius, skaicius);
    skaiciuDidinimasMygtukas.textContent = skaicius
})

// ================================
// skaiciu-didinimas zona
// ================================

let didintiPo10Mygtukas = document.querySelector('.didinti-po-10 button')
// console.log(didintiPo10Mygtukas);

didintiPo10Mygtukas.addEventListener('click' , function() {
    // alert('paspaudei!')
    let skaicius = parseInt(didintiPo10Mygtukas.textContent)
    // let skaicius = parseInt(didintiPo10Mygtukas.textContent)+ 10
    skaicius += 10
    // skaicius = skaicius + 10
    // console.log(typeof skaicius, skaicius);
    didintiPo10Mygtukas.textContent = skaicius
    // didintiPo10Mygtukas.textContent = skaicius + 10
})

// ================================
// didinti-mazinti zona
// ================================

let didintiMazintiAts = document.querySelector('.didinti-mazinti p')
// console.log(didintiMazintiAts);
// susikurem kintamaji auksciau, nes idejus i vidu (eventListenerio) nematytu-nepaimtu

let didintiMazintiSk = 0
let didintiMazintiLimitas = 8


document.querySelector('.didinti-mazinti .mazinti').addEventListener('click' , () => {
    // console.log('mažinimo veiksmas');
    if (didintiMazintiSk > 0 ){
        didintiMazintiSk--
        didintiMazintiAts.textContent = didintiMazintiSk
    }
})

document.querySelector('.didinti-mazinti .didinti').addEventListener('click' , () => {
    // console.log('didinimo veiksmas');
    if (didintiMazintiSk < didintiMazintiLimitas) {
        didintiMazintiSk++
        didintiMazintiAts.textContent = didintiMazintiSk
    }
})

// ================================
// ivairus-sk-keitimai zona
// ================================

let skKeitimaiAts = document.querySelector('.ivairus-sk-keitimai .atsakymas p span')
// console.log(skKeitimaiAts);

let keiciamasSk = 0
// console.log(typeof keiciamasSk, keiciamasSk);


document.querySelector('.ivairus-sk-keitimai .daugiau-vienu').addEventListener('click' , () => {
    // console.log('daugiau vienu');
        keiciamasSk++
        // keiciamasSk += 1
        skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .daugiau-penkiais').addEventListener('click' , () => {
    // console.log('daugiau penkiais');
    keiciamasSk += 5  
    skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .daugiau-desimt').addEventListener('click' , () => {
    // console.log('daugiau desimt');
    keiciamasSk += 10  
    skKeitimaiAts.textContent =  keiciamasSk
})

document.querySelector('.ivairus-sk-keitimai .maziau-vienu').addEventListener('click' , () => {
    // console.log('maziau vienu');
    if (keiciamasSk > 0) {
        keiciamasSk--
        skKeitimaiAts.textContent =  keiciamasSk
    }
})

document.querySelector('.ivairus-sk-keitimai .grazinti-nuli').addEventListener('click' , () => {
    // console.log('grazinti nuli');
    keiciamasSk = 0
    skKeitimaiAts.textContent =  keiciamasSk
})
