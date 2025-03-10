// alert('labas')

// ==================================
// perjungti blokas
// ==================================

document.querySelector('.perjungti button').addEventListener('click' , (event) => {
    // console.log(event); // surašo visą info apie tai kas kątik įvyko (apie patį paspaudimą)
    // console.log(event.target.textContent); // event.target - yra mygtukas ant kurio kątik spaudėm ir imam jo tekstą
    // console.log('paspausta');
    let turinys = document.querySelector('.perjungti .turinys')
    // console.log(turinys);
    // console.dir(turinys);

    if (event.target.textContent == 'Įjungti') {
        // console.log('reikia įjungti');
        event.target.textContent = 'Išjungti'
        turinys.style.display = 'block'
    } else {
        // console.log('reikia išjungti');
        event.target.textContent = 'Įjungti'
        turinys.style.display = 'none'
    }
})

// let mygtukas = document.querySelector('.perjungti button')

// mygtukas.addEventListener('click' , () => {
//     console.log(mygtukas);
// })

// ==================================
// teksto-keitimas blokas
// ==================================

let tkTekstas = document.querySelector('.teksto-keitimas .tekstas')
// console.log(tkTekstas);

document.querySelector('.teksto-keitimas #dydis').addEventListener('input' , (event) => {
    // console.log('kažkas'); 
    // console.dir(event.target) // event.target duoda input kurį kątik keičiau
    // console.log(event.target.valueAsNumber);
    tkTekstas.style.fontSize = event.target.valueAsNumber + 'px'
})

document.querySelector('.teksto-keitimas .tekstas-juoda').addEventListener('click' , () => {
    tkTekstas.style.color = 'black'
    // tkTekstas.style.color = '#000'
    // tkTekstas.style.color = '#000000'
})

document.querySelector('.teksto-keitimas .tekstas-balta').addEventListener('click' , () => {
    tkTekstas.style.color = 'white'
})

document.querySelector('.teksto-keitimas .fonas-nera').addEventListener('click' , () => {
    tkTekstas.style.background = 'none'
    // svarbu cia, kad visur butu vienodai arba background arba backrgound-color
})

document.querySelector('.teksto-keitimas .fonas-juoda').addEventListener('click' , () => {
    tkTekstas.style.background = 'black'
})

document.querySelector('.teksto-keitimas .fonas-balta').addEventListener('click' , () => {
    tkTekstas.style.background = 'white'
})


