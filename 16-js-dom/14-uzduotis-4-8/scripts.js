// alert('labas')

let tekstoAnalizeTextArea = document.querySelector('.teksto-analize .ivestis #tekstas')
let analize = document.querySelector('.analize');
let isvalymoMygtukas = document.querySelector('.teksto-analize .ivestis button.isvalyti');

tekstoAnalizeTextArea.addEventListener('input' , () => {
   if (tekstoAnalizeTextArea.value.trim() === '') {
        isvalymoMygtukas.classList.add('slepti')
   } else {
    isvalymoMygtukas.classList.remove('slepti')
   }
})

document.querySelector('.teksto-analize .ivestis .analizuoti').addEventListener('click' , () => {
    let sakinys = tekstoAnalizeTextArea.value.trim()

    if (sakinys != '') {
       analize.innerHTML 
       = `<p><strong>Žodžių kiekis:</strong> ${sakinys.split(' ').length}</p>
        <p><strong>Simbolių kiekis:</strong> ${sakinys.length}</p>`
    } else {
        analize.innerHTML = '<p class="klaida">Įveskite tekstą!</p>'
    }    
})

isvalymoMygtukas.addEventListener('click', () => {
    tekstoAnalizeTextArea.value = '';
    analize.innerHTML = '';
    isvalymoMygtukas.classList.add('slepti');
});

// trim
// nukarpo tuščius tarpus iš priekio ir galo
// pvz jeigu suvedu tekstą "tekstas" tai nieko nedarys
// o jeigu suvedu "tekstas      " tai nukarpys iki "tekstas"
// ps, per vidurį nekarpo, tik aplinku
// o čia su if panaudota, kad jeigu nukarpius tekstą gaunasi kad nėra nei vieno normalaus simbolio (sukčiavo tik tarpų pridedant ir nieko daugiau), tai tada kad kažką darytų, pvz klaidą parodytų

// let tekstas = 'zodis       '
// console.log(tekstas)
// console.log(tekstas.trim())

// gal aišku dar kabutes reikėtų išsivest aplinkui, kad išeitų suprasti kiek nukarpė
// tai jo, nes tuščias simbolis irgi yra simbolis, tai nėra tuščias tekstas, tai ir if nenorėjo nieko daryt jei klaidą metą tik kai grynai tuščias tekstas

// ARBA

// let tekstoIvedimoLaukas = document.getElementById('ivedimas');
// let rezultatuBlokas = document.getElementById('rezultatai');
// let valymoMygtukas = document.querySelector('.ivedimo-blokas button.isvalyti');

// tekstoIvedimoLaukas.addEventListener('input', () => {
//     if (tekstoIvedimoLaukas.value.trim() === '') {
//         valymoMygtukas.classList.add('slepti');
//     } else {
//         valymoMygtukas.classList.remove('slepti');
//     }
// });

// document.querySelector('.ivedimo-blokas button.analizuoti').addEventListener('click', () => {
//     let tekstas = tekstoIvedimoLaukas.value.trim();

//     if (tekstas === '') {
//         rezultatuBlokas.innerHTML = '<p class="klaida">Įveskite tekstą!</p>';
//         return;
//     }

//     let zodziai = tekstas.split(' ');

//     rezultatuBlokas.innerHTML = `<p><strong>Žodžių kiekis:</strong> ${ zodziai.length }</p>
//         <p><strong>Simbolių kiekis:</strong> ${ tekstas.length }</p>`;
// });

// valymoMygtukas.addEventListener('click', () => {
//     tekstoIvedimoLaukas.value = '';
//     rezultatuBlokas.innerHTML = '';
//     valymoMygtukas.classList.add('slepti');
// });


    
    
