import React, { useState } from 'react'
import KnygosIvedimas from './KnygosIvedimas'
import KnyguSpausdinimas from './KnyguSpausdinimas'

const KnyguBendras = () => {
    const [knygos, setKnygos] = useState([])

    const isvalytiKnygasHandler = () => {
        setKnygos([])
    }

    const onHandlerPapildytiKnygas = (naujaKnyga) => {
        setKnygos([...knygos, naujaKnyga])
    }
    
  return (
    <div>
        <h2>Knygos</h2>
        <KnygosIvedimas pridejimas={onHandlerPapildytiKnygas} />
        <KnyguSpausdinimas data={knygos} />
        {
            knygos.length > 0 &&
            <button onClick={isvalytiKnygasHandler}>Išvalyti</button>
        }
    </div>
  )
}

export default KnyguBendras