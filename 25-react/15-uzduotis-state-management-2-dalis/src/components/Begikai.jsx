import React from 'react'
import { useState } from 'react'

const Begikai = () => {
    const [pirmasBegikas, setPirmasBegikas] = useState(0)
    const [antrasBegikas, setAntrasBegikas] = useState(0)

    const pirmasBegikasHandler = (event) => {
        setPirmasBegikas(event.target.valueAsNumber)
    }

    const antrasBegikasHandler = (event) => {
        setAntrasBegikas(event.target.valueAsNumber)
    }

    const greitesnis = () => {
        if (pirmasBegikas < antrasBegikas) {
            return `Pirmas bėgikas buvo greitesnis ${antrasBegikas - pirmasBegikas} sekundėmis`
        } else if (pirmasBegikas > antrasBegikas) {
            return `Antras bėgikas buvo greitesnis ${pirmasBegikas - antrasBegikas} sekundėmis`
        } else {
            return 'Bėgikai atbėgo per vienodą laiką'
        }
    }

  return (
    <div>
        <h2>Bėgikai</h2>
        <div>
            <label htmlFor="pirmasBegikas">Pirmo bėgiko laikas:</label>
            <input type="number" id='pirmasBegikas' onChange={pirmasBegikasHandler} />
        </div>
        <div>
            <label htmlFor="antrasBegikas">Antro bėgiko laikas:</label>
            <input type="number" id='antrasBegikas' onChange={antrasBegikasHandler} />
        </div>
        <p>
            <strong>Bėgikų nubėgtas laikas (sek. per 100 metrų distanciją):</strong> &nbsp;
            {pirmasBegikas} ir {antrasBegikas} 
        </p>
        <p>{ greitesnis() }</p>
    </div>
  )
}

export default Begikai