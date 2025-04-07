import React from 'react'
import { TeksoVaik } from './TeksoVaik'

const TekstoBendras = () => {
  let vidinisTekstas = 'Trečia eilutė'

  return (
    <div>
        <h2>Teksto dalykai</h2>
        {/* atributo (kaip HTML) pavadinimas "tekstas" - raktas į objektą - kaip naujo kintamojo sukūrimas */}
        {/* čia svarbus eiliškumas */}
        <TeksoVaik tekstas="Pirma eilutė" />
        <TeksoVaik tekstas="Antra eilutė" />
        <TeksoVaik tekstas={vidinisTekstas} />
        <TeksoVaik />
    </div>
  )
}

export default TekstoBendras

// Kaip JS

// čia iškviečiant f-ją reikia duoti duomenis
// function bendras() {
//  vaikinis(10)
// }

// kviečiant šią f-ją reikia gauti duomenis ir su šiais duomenimis dirbama
// function vaikinis(skaicius) {
//  console.log(skaicius)
// }

// --------------------------------

// function bendras() {
//  vaikinis('labas', 10)
//  vaikinis('pasauli', 12)
// }

// function vaikinis(props) {}