import React from 'react'
import { useState } from 'react'

const Komp1 = () => {
    const [zodis, setZodis] = useState('')

    // const [ilgis, setIlgis] = useState(0)

    const zodzioHandler = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setZodis(event.target.value) // zodis = event.target.value
        // console.log(zodis); // kiek atsilieka - įvedus 'aa', mato 'a'

        // let zodis = event.target.value
        // setIlgis(event.target.value.length)
        // setIlgis(zodis.length)
    }

    // Kitas galima variantas
    // function zodzioIlgis() {
    //   return zodis.length
    // }

    // kiti galimi ilgio paskaičiavimo variantai, bet nereikalingi
    
  return (
    <div>
        <h2>Žodžio ilgis</h2>
        <label htmlFor="vardasInput">Žodis:</label>
        <input onInput={zodzioHandler} type="text" id='vardasInput' />
        {/* abiejuose vietuose išvedimas atsinaujina */}
        <p>Įvestas žodis: {zodis}</p>
        <p>Simbolių kiekis: {zodis.length}</p>
        {/* <p>Simbolių kiekis: { zodzioIlgis() }</p> */}
    </div>
  )
}

export default Komp1