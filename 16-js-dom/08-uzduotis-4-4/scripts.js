// alert('labas')

document.querySelector('.rodyti-nerodyti button').addEventListener('click' , (event) => {
    let paragrafas = document.querySelector('.rodyti-nerodyti p')

    if (event.target.textContent == 'Rodyti') {
        event.target.textContent = 'Nerodyti'
        paragrafas.style.display = 'block'
    } else {
        event.target.textContent = 'Rodyti'
        paragrafas.style.display = 'none'
    }
})

// ARBA

// let mygtukas = document.querySelector('button');
// let paragrafas = document.querySelector('p');

// mygtukas.addEventListener('click', () => {
//     if (paragrafas.classList.contains('rodyti')) {
//         paragrafas.classList.remove('rodyti');
//         mygtukas.innerText = 'Rodyti';
//     } else {
//         paragrafas.classList.add('rodyti');
//         mygtukas.innerText = 'Nerodyti';
//     }
// });
