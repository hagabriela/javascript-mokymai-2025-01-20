import React from 'react'
import { useState } from 'react'

const TrysKepyklos = () => {
    const [uzsakymai, setUzsakymai] = useState(0)

    const [kepykla1, setKepykla1] = useState(0)
    const [kepykla2, setKepykla2] = useState(0)
    const [kepykla3, setKepykla3] = useState(0)

    // const bendraSuma = kepykla1 + kepykla2 + kepykla3

    const uzsakymaiHandler = (event) => {
        setUzsakymai(event.target.valueAsNumber)
    }

    const kepykla1Handler = (event) => {
        setKepykla1(event.target.valueAsNumber)
    }

    const kepykla2Handler = (event) => {
        setKepykla2(event.target.valueAsNumber)
    }

    const kepykla3Handler = (event) => {
        setKepykla3(event.target.valueAsNumber)
    }

    const arSpes = () => {
        if (kepykla1 + kepykla2 + kepykla3 >= uzsakymai) {
            return `Spėja įgyvendinti užsakymus, perteklius: ${(kepykla1 + kepykla2 + kepykla3) - uzsakymai}`
        } else {
            return `Nespėja įgyvendinti užsakymų, nespės: ${uzsakymai - (kepykla1 + kepykla2 + kepykla3)}`
        }
    }

  return (
    <div>
        <h2>Trys kepyklos</h2>
        <div>
            <label htmlFor="uzsakymai">Dienos užsakymų kiekis:</label>
            <input type="number" id='uzsakymai' onInput={uzsakymaiHandler} />
        </div>
        <div>
            <label htmlFor="kepykla1">Pirma kepykla gali įgyvendinti tiek užsakymų:</label>
            <input type="number" id='kepykla1' onInput={kepykla1Handler} />
        </div>
        <div>
            <label htmlFor="kepykla2">Antra kepykla gali įgyvendinti tiek užsakymų:</label>
            <input type="number" id='kepykla2' onInput={kepykla2Handler} />
        </div>
        <div>
            <label htmlFor="kepykla3">Trečia kepykla gali įgyvendinti tiek užsakymų:</label>
            <input type="number" id='kepykla3' onInput={kepykla3Handler} />
        </div>
        <p><strong>Bendrai kepyklos įgyvendina tiek užsakymų: </strong>{kepykla1 + kepykla2 + kepykla3}</p>
        <p>{ arSpes() }</p>
    </div>
  )
}

export default TrysKepyklos