// alert('labas')

let skKeitimoAts = document.querySelector('.didinti-skaiciu .atsakymas p span')
let keiciamasSk = 1
let ivedamasTekstas = document.querySelector('.didinti-skaiciu .atsakymas #isvesties')

document.querySelector('.didinti-skaiciu .mygtukas button').addEventListener('click' , () => {
    keiciamasSk ++
    skKeitimoAts.textContent = keiciamasSk

    if (keiciamasSk >= 40) {
        ivedamasTekstas.innerText
        = `Kur tu eini? Daugiau lygių nebėra`
        ivedamasTekstas.style.background = 'red'
    } else if (keiciamasSk >= 30) {
        ivedamasTekstas.innerText 
        = `Jau pasiekėm 30!`
        ivedamasTekstas.style.background = 'red'
    } else if (keiciamasSk >= 20) {
        ivedamasTekstas.innerText 
        = `Jau pasiekėm 20!`
        ivedamasTekstas.style.background = 'orangered'
    } else if (keiciamasSk >= 10) {
        ivedamasTekstas.innerText  
        = `Jau pasiekėm 10!`
        ivedamasTekstas.style.background = 'orange'
    }
})

// ARBA

// let skaicius = 1;

// document.querySelector('button').addEventListener('click', () => {
//     skaicius++;
//     document.querySelector('.skaicius span').innerText = skaicius;

//     if (skaicius >= 10) {
//         document.querySelector('.info').innerText = 'Jau pasiekėm 10!';
//         document.querySelector('.info').classList.add('oranzinis');
//     }

//     if (skaicius >= 20) {
//         document.querySelector('.info').innerText = 'Jau pasiekėm 20!';
//         document.querySelector('.info').classList.add('oranzinis-tamsesnis');
//     }

//     if (skaicius >= 30) {
//         document.querySelector('.info').innerText = 'Jau pasiekėm 30!';
//         document.querySelector('.info').classList.add('raudonas');
//     }

//     if (skaicius >= 40) {
//         document.querySelector('.info').innerText = 'Kur tu eini? Daugiau lygių nebėra';
//     }
// });



