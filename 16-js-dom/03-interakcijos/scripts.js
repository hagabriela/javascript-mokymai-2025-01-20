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
// susikurem auksciau, nes idejus i vidu (eventListenerio) nematytu-nepaimtu

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