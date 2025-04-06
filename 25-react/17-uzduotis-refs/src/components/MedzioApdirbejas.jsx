import React from 'react'
import { useState, useRef } from 'react'

const MedzioApdirbejas = () => {
    const [medziaguKaina, setMedziaguKaina] = useState(null)
    const [darboValandos, setDarboValandos] = useState(null)
    const [valandinis, setValandinis] = useState(null)
    
    const medziaguKainaRef = useRef()
    const darboValandosRef = useRef()
    const valandinisRef = useRef()

    const ivestiesInputHandler = () => {
        setMedziaguKaina(medziaguKainaRef.current.valueAsNumber)
        setDarboValandos(darboValandosRef.current.valueAsNumber)
        setValandinis(valandinisRef.current.valueAsNumber)

        medziaguKainaRef.current.value = ''
        darboValandosRef.current.value = ''
        valandinisRef.current.value = ''
    }

    const bendrosProjektoIslaidos = () => {
        let bendrosIslaidos = (darboValandos * valandinis) - medziaguKaina
        return bendrosIslaidos
    }

    const turetuKainuoti = () => {
        let bendraKaina = bendrosProjektoIslaidos() + (bendrosProjektoIslaidos() * 0.3)  
        return bendraKaina
    }

  return (
    <div>
        <h2>Medžio apdirbejas</h2>
        <div>
            <label htmlFor="medziaguKaina">Kiek iš viso kainavo visos medžiagos?</label>
            <input type="number" id='medziaguKaina' ref={medziaguKainaRef} />
        </div>
        <div>
            <label htmlFor="darboValandos">Kiek iš viso valandų žmogus dirbo prie projekto?</label>
            <input type="number" id='darboValandos' ref={darboValandosRef} />
        </div>
        <div>
            <label htmlFor="valandinis">Koks turi būti valandinis uždarbis?</label>
            <input type="number" id='valandinis' ref={valandinisRef} />
        </div>
        <div>
            <button onClick={ivestiesInputHandler}>Įvesti</button>
        </div>
        {
            medziaguKaina !== null && darboValandos !== null && valandinis !== null &&
            <div>
                <p>Medžiagų kaina: {medziaguKaina} eur.</p>
                <p>Išdirbo: {darboValandos} val.</p>
                <p>Valandinis: {valandinis} eur.</p>
            </div>
        }
        {
            medziaguKaina !== null && darboValandos !== null && valandinis !== null &&
            <div>
                <p>Bendros šio projekto išlaidos: { bendrosProjektoIslaidos() } eur.</p>
                <p>Bendra šio projekto kaina: { turetuKainuoti() } eur.</p>
            </div>
        }
    </div>
  )
}

export default MedzioApdirbejas