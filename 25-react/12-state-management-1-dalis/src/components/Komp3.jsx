import React from 'react'
import { useState } from 'react'

const Komp3 = () => {
    const [skaicius, setSkaicius] = useState(0)

    const didintiVienetu = () => {
        // setSkaicius(nauja reikšmė)
        setSkaicius(skaicius + 1) // skaicius = skaicius + 1
    }

    const mazintiVienetu = () => {
        setSkaicius(skaicius - 1) // skaicius = skaicius - 1
    }

    const didintiPenkiais = () => {
        setSkaicius(skaicius + 5) // skaicius = skaicius + 5
    }

    const mazintiPenkiais = () => {
        setSkaicius(skaicius - 5) // skaicius = skaicius - 5
    }

    const nustatytiNuli = () => {
        setSkaicius(0) // skaicius = 0
    }

  return (
    <div>
        <h2>Skaičių keitinėjimas</h2>
        <button onClick={didintiVienetu}>Didinti vienu</button>
        <button onClick={mazintiVienetu}>Mažinti vienu</button>
        <button onClick={didintiPenkiais}>Didinti penkiais</button>
        <button onClick={mazintiPenkiais}>Mažinti penkiais</button>
        <button onClick={nustatytiNuli}>Nustatyti 0</button>
        <p>Dabartinė reikšme {skaicius}</p>
    </div>
  )
}

export default Komp3