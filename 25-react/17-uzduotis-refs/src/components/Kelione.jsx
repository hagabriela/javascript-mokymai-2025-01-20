import React from 'react'
import { useState, useRef } from 'react'

const Kelione = () => {
    const [kilometrai, setKilometrai] = useState(null)
    const [kuroSanaudos, setKuroSanaudos] = useState(null)
    const [kuroKaina, setKuroKaina] = useState(null)

    const kilometraiRef = useRef()
    const kuroSanaudosRef = useRef()
    const kuroKainaRef = useRef()

    const ivestiHandler = () => {
        setKilometrai(kilometraiRef.current.valueAsNumber)
        setKuroSanaudos(kuroSanaudosRef.current.valueAsNumber)
        setKuroKaina(kuroKainaRef.current.valueAsNumber)

        kilometraiRef.current.value = ''
        kuroSanaudosRef.current.value = ''
        kuroKainaRef.current.value = ''
    }

    const kuroSunaudota = () => {
        let kuroSunaudojimas = (kilometrai / 100) * kuroSanaudos
        return kuroSunaudojimas
    }

    const bendraKuroKaina = () => {
        let bendraKaina = kuroSunaudota() * kuroKaina
        return bendraKaina
    }

  return (
    <div>
        <h2>Kelionė</h2>
        <div>
            <label htmlFor="kilometra">Kiek iš viso reikės nuvažiuoti kilometrų?</label>
            <input type="number" id='kilometrai' ref={kilometraiRef} />
        </div>
        <div>
            <label htmlFor="kuroSanaudos">Vidutinės automobilio kuro sąnaudos:</label>
            <input type="number" id='kuroSanaudos' ref={kuroSanaudosRef} />
        </div>
        <div>
            <label htmlFor="kuroKaina">Kuro kaina už litrą:</label>
            <input type="number" id='kuroKaina' ref={kuroKainaRef} />
        </div>
        <div>
            <button onClick={ivestiHandler}>Įvesti</button>
        </div>
        {
            kilometrai !== null && kuroSanaudos !== null && kuroKaina !== null &&
            <div>
                <p>{kilometrai} km</p>
                <p>Kuro sąnaudos: {kuroSanaudos} l 100-ui kilometrų</p>
                <p>Kuro kaina: {kuroKaina} eur.</p>
            </div>
        }
        {
            kilometrai !== null && kuroSanaudos !== null && kuroKaina !== null &&
            <div>
                <p>Kuro per kelionę bus sunaudota: { kuroSunaudota() } l</p>
                <p>Kuras iš viso kainuos: { bendraKuroKaina() } eur.</p>
            </div>
        }
    </div>
  )
}

export default Kelione