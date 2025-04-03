import React from 'react'
import { useState } from 'react'

const Komp2 = () => {
    const [pirmas, setPirmas] = useState('')
    const [antras, setAntras] = useState('')

    // 2 f-jos ir 2 kintamieji

    // f-ja pirmasHandler ir antrasHandler vykdoma / užlipdoma
    // ant atitinkamo inputo ir ten dedama info.

    const pirmasHandler = (event) => {
        // alert('Pirmas')
        setPirmas(event.target.value);
        // ilgesnis() // teoriškai galima
    }

    const antrasHandler = (event) => {
        // alert('Antras')
        setAntras(event.target.value);
    }

    // pasikeitus bet kuriam iš kintamųjų,
    // f-ja bus automatiškai iškviesta ir vykdys dalykus
    const ilgesnis = () => {
        if (pirmas.length > antras.length) {
            return pirmas
        } else if (pirmas.length < antras.length) {
            return antras
        } else {
            return 'Abu žodžiai yra vienodo ilgio'
        }
    }

  return (
    <div>
        <h2>Ilgesnis žodis</h2>
        <div>
            <label htmlFor="pirmasInput">Pirmas:</label>
            <input type="text" onChange={pirmasHandler} id='pirmasInput' />
        </div>
        <div>
            <label htmlFor="antrasInput">Antras:</label>
            <input type="text" onChange={antrasHandler} id='antrasInput' />
        </div>
        {
            // kad nerodytų teksto, kai neįvesti žodžiai
            pirmas.length > 0 && antras.length > 0 &&
            // pirmas && antras &&
            <>
                <p>
                    <strong>Įvesti žodžiai:</strong> &nbsp;
                    {pirmas} ir {antras}
                </p>
                <p><strong>Ilgesnis žodis:</strong> { ilgesnis() }</p>
            </>
        }
    </div>
  )
}

export default Komp2

// Input (laukelis) - iš jo imam info -> event
// Mygtukas(click) - iš jo imam info -> event
// Forma (3 input(laukeliai) ir mygtukas(submit)) -> event
// Input (laukelis) ir mygtukas(click) -> be event

// Event - sutampa paspaudimas ir iš kur imam info