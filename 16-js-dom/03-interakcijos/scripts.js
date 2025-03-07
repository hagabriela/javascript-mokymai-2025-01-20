// alert('labas')

// ================================
// skaiciu-didinimas zona
// ================================

let skaiciuDidinimasMygtukas = document.querySelector('.skaiciu-didinimas button')
// console.log(skaiciuDidinimasMygtukas);

skaiciuDidinimasMygtukas.addEventListener('click' , function() {
    // alert('paspaudei!')
    let skaicius = parseInt(skaiciuDidinimasMygtukas.textContent)
    skaicius++
    // console.log(typeof skaicius, skaicius);
    skaiciuDidinimasMygtukas.textContent = skaicius
    

})
