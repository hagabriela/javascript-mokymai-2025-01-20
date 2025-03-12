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