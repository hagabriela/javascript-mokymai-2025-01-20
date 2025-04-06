import React, { use } from 'react'
import { useState, useRef } from 'react'

const Kepyklele = () => {
    const [darbuotojuSk, setDarbuotojuSk] = useState(0)
    const [kepiniuKiekis, setKepiniuKiekis] = useState(0)
    const [darboValandos, setDarboValandos] = useState(0)

    const pirmasInputHandler = (event) => {
        setDarbuotojuSk(event.target.valueAsNumber)
    }

    const antrasInputHandler = (event) => {
        setKepiniuKiekis(event.target.valueAsNumber)
    }

    const treciasInputHandler = (event) => {
        setDarboValandos(event.target.valueAsNumber)
    }

    const [uzsakymai, setUzsakymai] = useState([])
    const uzsakymaiRef = useRef()

    const ivestiInputHandler = () => {
        let naujasUzsakymas = uzsakymaiRef.current.valueAsNumber;
       
        setUzsakymai([...uzsakymai, naujasUzsakymas])

        uzsakymaiRef.current.value = ''
    }

    const uzsakymuSuma = () => {
        let suma = 0
        for (const uzsakymas of uzsakymai) {
            suma += uzsakymas
        }
        return suma
    }

    const pajegumas = () => {
        return darbuotojuSk * kepiniuKiekis * darboValandos
    }

    const arSpes = () => {
        if (pajegumas() >= uzsakymuSuma()) {
            return 'spės'
        } else {
            return 'nespės'
        }
    }

  return (
    <div>
        <h2>Kepyklėlė</h2>
        <div>
            <label htmlFor="darbuotojuSk">Darbuotojų skaičius</label>
            <input type="number" id='darbuotojuSk' min={1} onInput={pirmasInputHandler} />
        </div>
        <div>
            <label htmlFor="kepiniuKiekis">Vieno darbuotoju kepinių kiekis per valandą</label>
            <input type="number" id='kepiniuKiekis' min={1} onInput={antrasInputHandler} />
        </div>
        <div>
            <label htmlFor="darboValandos">Darbo valandų per dieną</label>
            <input type="number" id='darboValandos' min={1} onInput={treciasInputHandler} />
        </div>
        <div>
            <label htmlFor="uzsakymai">Visi dienos užsakymai</label>
            <input type="number" id='uzsakymai' min={1} ref={uzsakymaiRef} />
        </div>
        <div>
            <button onClick={ivestiInputHandler}>Įvesti</button>
        </div>
        <div>
            <p>Darbuotojų skaičius: {darbuotojuSk}</p>
            <p>Kepinių kiekis: {kepiniuKiekis}</p>
            <p>Darbo valandų: {darboValandos}</p>
            <p>Užsakymai: { uzsakymai.join(', ') }</p>
        </div>
        {
            uzsakymai.length > 0 &&
            <div>
                <p>Užsakymų suma: { uzsakymuSuma() }</p>
            </div>
        }
        {
            darbuotojuSk > 0 && kepiniuKiekis > 0 && darboValandos > 0 &&
            <div>
                <p>Bendras kepyklos pajėgumas: { pajegumas() }</p>
            </div>
        } 
        {
            uzsakymai.length > 0 && darbuotojuSk > 0 && kepiniuKiekis > 0 && darboValandos > 0 &&
            <div>
                <p>Kepykla { arSpes() } įgyvendinti visus dienos užsakymus</p>
            </div>
        }
    </div>
  )
}

export default Kepyklele