// alert('labas')

let skaicius = 1
let skaciausAts = document.querySelector('.blokelis h1 span')
let riba = 5

document.querySelector('.blokelis .atgal').addEventListener('click' , () => {
    if (skaicius == 1) {
        skaicius = riba
    } else {
        skaicius --
    }
    skaciausAts.innerText = skaicius
})

document.querySelector('.blokelis .pirmyn').addEventListener('click' , () => {
    if (skaicius == riba) {
        skaicius = 1
    } else {
        skaicius ++
    }
    skaciausAts.innerText = skaicius
})