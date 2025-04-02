import React from 'react'
import { useState } from 'react'

const GreicioMatuoklis = () => {
    const [greitis, setGreitis] = useState(0)

    const greicioKeitimoHandler = (pokytis) => {
        if (pokytis === 0) {
            setGreitis(0)
        } else {
            setGreitis(greitis + pokytis)
        }
    }

    const tikrinti = () => {

        if (greitis == 0) {
            return 'stovite'
        } else if (greitis < 25) {
            return 'važiuojate lėtai'
        } else if (greitis < 60) {
            return 'važiuojate tinkamai'
        } else {
            return 'viršijate'
        }
    }

  return (
    <div>
        <h2>Greičio matuoklis</h2>
        <button onClick={ () => greicioKeitimoHandler(0) }>0 km/h</button>
        <button onClick={ () => greicioKeitimoHandler(10)}>10 km/h</button>
        <button onClick={ () => greicioKeitimoHandler(50)}>50 km/h</button>
        <p>Greitis: {greitis} km/h</p>
        <p>{ tikrinti() }</p>
    </div>
  )
}

export default GreicioMatuoklis