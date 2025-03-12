// alert('labas')

// ==============================
// junginejimai dalis
// ==============================

document.querySelector('.junginejimai .uzdeti-ryskus').addEventListener('click' , () => {
    document.querySelector('.junginejimai p').classList.add('ryskus')
})

document.querySelector('.junginejimai .uzdeti-spalvinti').addEventListener('click' , () => {
    document.querySelector('.junginejimai p').classList.add('spalvinti')
})

document.querySelector('.junginejimai .nuimti-viska').addEventListener('click' , () => {
    document.querySelector('.junginejimai p').classList.remove('ryskus' , 'spalvinti')
})
// jei nera tos klases tuo metu, nesugriauna

// ==============================
// modalo-ijungimas dalis
// ==============================

let modalas = document.querySelector('.modal-wrapper')

document.querySelector('.modalo-ijungimas button').addEventListener('click' , () => {
    modalas.classList.toggle('active')
    // modalas.classList.add('active')
})


document.querySelector('.modal-wrapper .backdrop').addEventListener('click' , () => {
    modalas.classList.toggle('active')
    // modalas.classList.remove('active')
})

document.querySelector('.modal-wrapper .modal button').addEventListener('click' , () => {
    modalas.classList.toggle('active')
    // modalas.classList.remove('active')
})
// galima buvo ir su add bei remove
// pats toggle veikia kaip add ir remove, bet pats atsirenka kada ka