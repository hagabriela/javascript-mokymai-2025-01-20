import React from 'react'

// (props)
// object unpacking
// ({ pavadinimas, kategorija}) - raktai 
// SVARBU SKLIAUSTUKAI 
// Bet reikia VISUS raktus nusirodyti, kuriuos norime naudoti / išvesti
// šis variantas daugiau konkretumo ir mažiau kodo rašymo
const Paslauga = ({ pavadinimas, kategorija }) => {
  return (
    <div>
        <h3>{pavadinimas}</h3>
        <p>{kategorija}</p>
    </div>
  )
}

export default Paslauga

// Kaip JS
// let masina = { marke: 'Audi', modelis: 'A4', metai: 2010 }
// let { marke, modelis } = masina
// tada marke duos 'Audi'...

// let marke = masina.marke
// jei kintamojo ir rakto objekte pavadinimai vienodi, tada:
// let {marke} = masina

// Reacte
// props - objektas
// Kaip
// let props = {
// pavadinimas:...
// kategorija:...
// }

// Tarsi kuriamas kintamasis
// let pavadinimas = props.pavadinimas
// let kategorija = props.kategorija
// kitaip: (kintamojo ir rakto objekte pavadinimai vienodi)
// let { pavadinimas, kategorija } = props // 2 kintamieji - pavadinimas ir kategorija


