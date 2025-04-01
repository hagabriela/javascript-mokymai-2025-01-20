const Komp1 = () => {
    let pageTitle = 'Įmonė'
    let pageDescription = 'Aprašymas apie įmonę'
    let buttonText = 'Spausk'

  return (
    <div>
        <h1>{pageTitle}</h1>
        <p>{pageDescription}</p>
        <button>{buttonText}</button>
    </div>
  )
}

export default Komp1

// Gali būti tas pats kintamojo pavadinimas, 
// jeigu yra skirtinguose komponentuose 
// kaip skirtinguose f-jose

// function pirmas() {
//      let kintamasis = 'abc'
// }

// function antras() {
//      let kintamasis = 'def'
// }

// KAIP JS
// function komp1() {
//      let pageTitle = 'Pavadinimas'
// 
//      return `<h1>${pageTitle}</h1>`
// }

// document.querySelector('.blokas').innerHTML = komp1