import React, { useState } from 'react'
import DarbuotojoIvedimas from './DarbuotojoIvedimas'
import DarbuotojoSpausdinimas from './DarbuotojoSpausdinimas'

const ImoneBendras = () => {
    const [darbuotojai, setDarbuotojai] = useState([])

    const isvalytiDarbuotojosHandler = () => {
        setDarbuotojai([])
    }

    const onHandlerPapildytiDarbuotoja = (naujasDarbuotojas) => {
        setDarbuotojai([...darbuotojai, naujasDarbuotojas])
    }

  return (
    <div>
        <h2>Darbuotojai</h2>
        <DarbuotojoIvedimas pridejimas={onHandlerPapildytiDarbuotoja}/>
        <DarbuotojoSpausdinimas data={darbuotojai}/>
        {
            darbuotojai.length > 0 &&
            <button onClick={isvalytiDarbuotojosHandler}>Išvalyti</button>
        }
    </div>
  )
}

export default ImoneBendras