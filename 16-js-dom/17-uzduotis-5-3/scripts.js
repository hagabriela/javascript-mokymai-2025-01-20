/* ===================================
RECIPES AND INGREDIENTS
=================================== */

let recipe1 = document.querySelector('.recipes-section .content-part .recipe1')
let recipe2 = document.querySelector('.recipes-section .content-part .recipe2')
let recipe3 = document.querySelector('.recipes-section .content-part .recipe3')

let slider = document.querySelector('.portion-section .content-part #porcijos')
let quantityResult = document.querySelector('.portion-section .content-part p')

let ingredientsResults = document.querySelector('.ingredients-section .content-part')

let recipe1Chicken = 150 // g
let recipe1Salat = 75 // g
let recipe1Tomato = 2 //vnt

let recipe2Flavor = 250 // g
let recipe2Egg = 1 // vnt
let recipe2Blueberry = 50 //g
let recipe2Sugar = 1 // saukstelis

let recipe3Pasta = 75 // g
let recipe3Meat = 125 // g
let recipe3Spice = 0.25 //saukstelio

let selectedRecipe = 2

recipe1.addEventListener('click' , () => {
    selectedRecipe = 1

    recipe1.classList.add('active')
    recipe2.classList.remove('active')
    recipe3.classList.remove('active')

    let howManyPortion = slider.valueAsNumber

    ingredientsResults.innerHTML = `<p>Vištienos: <span>${recipe1Chicken * howManyPortion} g</span></p>
    <p>Salotų: <span>${recipe1Salat * howManyPortion} g</span></p>
    <p>Pomidorų: <span>${recipe1Tomato * howManyPortion} vnt</span></p>`
})

recipe2.addEventListener('click' , () => {
    selectedRecipe = 2

    recipe1.classList.remove('active')
    recipe2.classList.add('active')
    recipe3.classList.remove('active')

    let howManyPortion = slider.valueAsNumber

    ingredientsResults.innerHTML = `<p>Miltų: <span>${recipe2Flavor * howManyPortion} g</span></p>
    <p>Kiaušinių: <span>${recipe2Egg * howManyPortion} vnt.</span></p>
    <p>Mėlynių: <span>${recipe2Blueberry * howManyPortion} g</span></p>
    <p>Cukraus: <span>${recipe2Sugar * howManyPortion} šaukštelių</span></p>`
})

recipe3.addEventListener('click' , () => {
    selectedRecipe = 3

    recipe1.classList.remove('active')
    recipe2.classList.remove('active')
    recipe3.classList.add('active')

    let howManyPortion = slider.valueAsNumber

    ingredientsResults.innerHTML = `<p>Makaronų: <span>${recipe3Pasta * howManyPortion} g</span></p>
    <p>Mėsos: <span>${recipe3Meat * howManyPortion} g</span></p>
    <p>Prieskonių: <span>${recipe3Spice * howManyPortion} šaukštelio</span></p>`
})

/* ===================================
PORTION
=================================== */

slider.addEventListener('input' , (event) => {
    // console.log(slider.valueAsNumber);
    let selectedQuantity = event.target.valueAsNumber
    quantityResult.textContent = selectedQuantity;

    // Apskaičiuojame slankiklio poziciją kaip procentą
   let percent = ((slider.valueAsNumber - slider.min) / (slider.max - slider.min)) * 100;

    // Judiname skaičių kartu su slankikliu
    quantityResult.style.left = `${percent}%`;
    if (percent <= 50) {
        quantityResult.style.transform = `translateX(-50%)`;
    } else {
        quantityResult.style.transform = `translateX(-100%)`;
    }

   if (selectedRecipe == 1) { 
    ingredientsResults.innerHTML = `<p>Vištienos: <span>${recipe1Chicken * selectedQuantity} g</span></p>
    <p>Salotų: <span>${recipe1Salat * selectedQuantity} g</span></p>
    <p>Pomidorų: <span>${recipe1Tomato * selectedQuantity} vnt</span></p>`
   } else if (selectedRecipe == 2) {
    ingredientsResults.innerHTML = `<p>Miltų: <span>${recipe2Flavor * selectedQuantity} g</span></p>
    <p>Kiaušinių: <span>${recipe2Egg * selectedQuantity} vnt.</span></p>
    <p>Mėlynių: <span>${recipe2Blueberry * selectedQuantity} g</span></p>
    <p>Cukraus: <span>${recipe2Sugar * selectedQuantity} šaukštelių</span></p>`
   } else if (selectedRecipe == 3) {
    ingredientsResults.innerHTML = `<p>Makaronų: <span>${recipe3Pasta * selectedQuantity} g</span></p>
    <p>Mėsos: <span>${recipe3Meat * selectedQuantity} g</span></p>
    <p>Prieskonių: <span>${recipe3Spice * selectedQuantity} šaukštelio</span></p>`
   }
})



