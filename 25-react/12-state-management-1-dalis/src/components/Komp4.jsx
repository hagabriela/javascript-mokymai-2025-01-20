import React from 'react'
import { useState } from 'react'

const Komp4 = () => {
  const [skaicius, setSkaicius] = useState(10)
  // let skaicius = 10
  // pradinė reikšmė 10

  const skKeitimoHandler = (pokytis) => {
    // alert('gautas pokytis: ' + pokytis)
    if (pokytis === 0) {
       // jeigu 0 perrašome į 0
        setSkaicius(0)
    } else {
        // jeigu kitas skaičius - keičiame nuo dabartinės skaičiaus reikšmės
        setSkaicius(skaicius + pokytis)
        // pvz.: 15(10 + 5)
    }
  }

  return (
    <div>
        <h2>Skaičių keitinėjimas</h2>
        <button onClick={ () => skKeitimoHandler(1) }>Didinti vienu</button>
        <button onClick={ () => skKeitimoHandler(-1) }>Mažinti vienu</button> {/* 5 + (-1) t. y. 5 - 1 */}
        <button onClick={ () => skKeitimoHandler(5) }>Didinti penkiais</button>
        <button onClick={ () => skKeitimoHandler(-5) }>Mažinti penkiais</button>
        <button onClick={ () => skKeitimoHandler(0) }>Nustatyti 0</button>
        <p>Dabartinė reikšme {skaicius}</p>
    </div>
  )
}

export default Komp4