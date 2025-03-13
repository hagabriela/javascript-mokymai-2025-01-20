let recipe1 = document.querySelector('.recipes-section .content-part .recipe1')
let recipe2 = document.querySelector('.recipes-section .content-part .recipe2')
let recipe3 = document.querySelector('.recipes-section .content-part .recipe3')

recipe1.addEventListener('click' , () => {
    recipe1.classList.add('active')
    recipe2.classList.remove('active')
    recipe3.classList.remove('active')
})

recipe2.addEventListener('click' , () => {
    recipe1.classList.remove('active')
    recipe2.classList.add('active')
    recipe3.classList.remove('active')
})

recipe3.addEventListener('click' , () => {
    recipe1.classList.remove('active')
    recipe2.classList.remove('active')
    recipe3.classList.add('active')
})