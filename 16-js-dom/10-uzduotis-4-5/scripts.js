// alert('labas')

let mygtukas = document.querySelector('button.neregiui');
let pagrindinisBlokas = document.querySelector('body');

mygtukas.addEventListener('click', () => {
    if (pagrindinisBlokas.classList.contains('pritaikymas')) {
        pagrindinisBlokas.classList.remove('pritaikymas');
        mygtukas.textContent = 'Viską išdidinti';
    } else {
        pagrindinisBlokas.classList.add('pritaikymas');
        mygtukas.textContent = 'Viską grąžinti atgal';
    }
});


