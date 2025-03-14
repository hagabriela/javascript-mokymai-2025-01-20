let tab1 = document.querySelector('.tabs .tab1')
let tab2 = document.querySelector('.tabs .tab2')
let tab3 = document.querySelector('.tabs .tab3')

let content1 = document.querySelector('.content .tab1-content') 
let content2 = document.querySelector('.content .tab2-content')
let content3 = document.querySelector('.content .tab3-content')

tab1.addEventListener('click' , (event) => {
    tab1.classList.add('active')
    content1.classList.add('active')

    tab2.classList.remove('active')
    content2.classList.remove('active')

    tab3.classList.remove('active')
    content3.classList.remove('active')
})

tab2.addEventListener('click' , (event) => {
    tab1.classList.remove('active')
    content1.classList.remove('active')

    tab2.classList.add('active')
    content2.classList.add('active')

    tab3.classList.remove('active')
    content3.classList.remove('active')
})

tab3.addEventListener('click' , (event) => {
    tab1.classList.remove('active')
    content1.classList.remove('active')

    tab2.classList.remove('active')
    content2.classList.remove('active')
    
    tab3.classList.add('active')
    content3.classList.add('active')
})