// alert('labas')

let isvedamasTekstas = document.querySelector('.blokas .atsakymas')

document.querySelector('.ivedama button').addEventListener('click' , () => {
    const laukelis = document.querySelector('input')
    let reiksme = laukelis.valueAsNumber

    if (reiksme % 2 == 0) {
        isvedamasTekstas.innerHTML = `<p>Skaičius ${reiksme} yra lyginis</p>`
        isvedamasTekstas.style.background = 'green'
    } else {
        isvedamasTekstas.innerHTML = `<p>Skaičius ${reiksme} yra nelyginis</p>`
        isvedamasTekstas.style.background = 'red'
    }
})

// ARBA

// let atsakymoBlokas = document.getElementById('atsakymas');

// document.querySelector('button').addEventListener('click', () => {
//     const laukelis = document.querySelector('input');
//     let reiksme = laukelis.valueAsNumber;

//     if (reiksme % 2 === 0) {
//         atsakymoBlokas.innerHTML = `<p class="taip">Skaičius ${reiksme} yra lyginis!</p>`;
//     } else {
//         atsakymoBlokas.innerHTML = `<p class="ne">Skaičius ${reiksme} yra nelyginis!</p>`;
//     }

//     laukelis.value = '';
// });