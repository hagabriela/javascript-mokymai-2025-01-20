import React from 'react'
import { useState } from 'react'

const Vistos = () => {
    let uzsakymai = 30
    const [kiausiniai, setKiausiniai] = useState(0)

    const kiausiniaiHandler = (event) => {
        setKiausiniai(event.target.valueAsNumber)
    }

    const igyvendinimas = () => {
        if (kiausiniai >= uzsakymai) {
            return `Viskas gerai, spėja įgyvendinti užsakymus, kiaušinių perteklius: ${kiausiniai - uzsakymai}`
        } else {
            return `Blogai, nespėjama įgyvendinti užsakymų, kiaušinių trūkumas: ${uzsakymai - kiausiniai}`
        }
    }

  return (
    <div>
        <h2>Vištos</h2>
        <div>
            <label htmlFor="kiausiniai">Kiek vištos padėjo kiaušinių (per dieną):</label>
            <input type="number" id='kiausiniai' onInput={kiausiniaiHandler} />
        </div>
        <p>
            <strong>Vištos padėjo kiaušinių šią dieną (vnt.):</strong> &nbsp;
            {kiausiniai}
        </p>
        <p>{ igyvendinimas() }</p>
    </div>
  )
}

export default Vistos