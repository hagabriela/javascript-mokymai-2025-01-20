
document.querySelector('button').addEventListener('click' , () => {
    document.querySelector('h1').classList.toggle('isdidinti-antraste')
    document.querySelector('p').classList.toggle('isdidinti')
    document.querySelector('ul').classList.toggle('isdidinti')
    document.querySelector('table').classList.toggle('isdidinti-table')
    // document.querySelectorAll('li').forEach(el => el.classList.toggle('isdidinti'));
    // document.querySelectorAll('td').forEach(el => el.classList.toggle('isdidinti' , 'isdidinti-table'));
    document.querySelector('button').classList.toggle('isdidinti')

    if (document.querySelector('h1').classList.contains('isdidinti-antraste')) {
        document.querySelector('button').textContent = 'Viską grąžinti atgal';
    } else {
        document.querySelector('button').textContent = 'Viską išdidinti';
    }
})

// uztenka ant vieno (pirmo), bet galima nurodyti ir visus

// if (
//     antraste.classList.contains('isdidinti-antraste') &&
//     document.querySelector('p').classList.contains('isdidinti') &&
//     document.querySelector('ul').classList.contains('isdidinti')
// ) {
//     mygtukas.textContent = 'Viską grąžinti atgal';
// } else {
//     mygtukas.textContent = 'Viską išdidinti';
// }