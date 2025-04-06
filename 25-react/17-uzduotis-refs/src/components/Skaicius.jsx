import React, { useRef } from 'react'
import { useState } from 'react'

const Skaicius = () => {
    const [skaicius, setSkaicius] = useState(null)
    const skaiciusInputRef = useRef()

    const ivestiSkaiciuHandler = () => {
        setSkaicius(skaiciusInputRef.current.valueAsNumber)

        skaiciusInputRef.current.value = ''
    }

    const teigiamasNeigiamas = () => {
        if (skaicius >= 0) {
            return 'teigiamas'
        } else {
            return 'neigiamas'
        }
    }

    const lyginisNelyginis = () => {
        if (skaicius % 2 == 0) {
            return 'lyginis'
        } else {
            return 'nelyginis'
        }
    }

  return (
    <div>
        <h2>Skaičius</h2>
        <div>
            <label htmlFor="skaicius">Skaičius</label>
            <input type="number" id='skaicius' ref={skaiciusInputRef} />
            <button onClick={ivestiSkaiciuHandler}>Įvesti</button>
        </div>
        {
            skaicius !== null &&
            <div>
                <p>Jūs įvedėte: {skaicius}</p>
                <p>{skaicius} yra { teigiamasNeigiamas() }</p>
                <p>{skaicius} yra { lyginisNelyginis() }</p>
            </div>
        }
    </div>
  )
}

export default Skaicius