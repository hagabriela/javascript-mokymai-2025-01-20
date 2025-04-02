import React from 'react'
import { useState } from 'react'

const Komp2 = () => {
    // masyvas nemodifikuojamas, todėl taip sukuriamas, o ne per useState
    let zodziai = ['labas', 'rytas', 'Lietuva', 'sakau', 'Tau']
    // const zodziai = ['labas', 'rytas', 'Lietuva', 'sakau', 'Tau']

    // komponento kintamasis, kuris yra atnaujinamas
    let [istrauktas, setIstrauktas] = useState('-')

    const traukti = () => {
        // zodziai.length - žodžiai, tai 0-4 indeksu
        let random = Math.floor(Math.random() * zodziai.length)
        // pvz.: zodziai[2] = Lietuva ir t.t.
        setIstrauktas(zodziai[random])
    }

    // Reactas supranta, ką reikia padaryti dėl set ir useState dalių

  return (
    <div>
        <h2>Random žodis</h2>
        <button onClick={traukti}>Traukti</button>
        {/* abiejuose vietuose bus atnaujintas išvedimas */}
        <p>Ištraukėm: {istrauktas}</p>
        <p>Simbolių kiekis: {istrauktas.length}</p>
    </div>
  )
}

export default Komp2