// alert ('labas')

// let tekstas = document.querySelector('.tekstas p');

// document.getElementById('dydisInput').addEventListener('input', (event) => {
//     if (event.target.value > 0) {
//         tekstas.style.fontSize = event.target.value + 'px';
//     } else {
//         alert('Įveskite teigiamą skaičių');
//         tekstas.style.fontSize = '16px';
//         event.target.value = 16;
//     }
// });

let transformuojamasTekstas = document.querySelector('.teksto-formatavimas .tekstas')

document.querySelector('.teksto-formatavimas #dydis').addEventListener('input' , (event) => {
    if (event.target.valueAsNumber > 0) {
        transformuojamasTekstas.style.fontSize = event.target.valueAsNumber + 'px'
    } else {
        alert('Įveskite teigiamą skaičių');
        transformuojamasTekstas.style.fontSize = '16px';
        event.target.valueAsNumber = 16;
    }
})

let mygtukai = document.querySelectorAll('.teksto-formatavimas .grupe button');

mygtukai.forEach((mygtukas) => {
    mygtukas.addEventListener('click', (event) => {
        document.querySelector('.teksto-formatavimas .grupe button.aktyvus').classList.remove('aktyvus');
        event.target.classList.add('aktyvus');

        let stilius = event.target.attributes['data-tipas'].value;

        switch (stilius) {
            case 'paprastas':
                transformuojamasTekstas.style.fontStyle = 'normal';
                transformuojamasTekstas.style.fontWeight = 'normal';
                break;
            case 'pastorintas':
                transformuojamasTekstas.style.fontStyle = 'normal';
                transformuojamasTekstas.style.fontWeight = 'bold';
                break;
            case 'pasviras':
                transformuojamasTekstas.style.fontStyle = 'italic';
                transformuojamasTekstas.style.fontWeight = 'normal';
                break;
        }
    });
});