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
console.log(tkTekstas);
