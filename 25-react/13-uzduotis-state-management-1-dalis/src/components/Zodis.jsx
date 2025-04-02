import React from 'react'
import { useState } from 'react'

const Zodis = () => {
    const [zodis, setZodis] = useState('-')

    const pasirinkimoHandler = (event) => {
        let naujasZodis = event.target.innerText
        setZodis(naujasZodis)
    }

  return (
    <div>
        <button onClick={pasirinkimoHandler}>Pomidoras</button>
        <button onClick={pasirinkimoHandler}>Agurkas</button>
        <p>Žodis: {zodis}</p>
    </div>
  )
}

export default Zodis