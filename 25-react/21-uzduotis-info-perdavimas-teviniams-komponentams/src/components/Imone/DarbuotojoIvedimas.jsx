import React from 'react'
import { useRef } from 'react'

const DarbuotojoIvedimas = (props) => {
    const vardasRef = useRef()
    const pavardeRef = useRef()
    const pareigosRef = useRef()
    const atlyginimasRef = useRef()
        
    const onSubmitFormaHandler = (event) => {
            event.preventDefault() 
                
            let naujasDarbuotojas = {
                vardas: vardasRef.current.value,
                pavarde: pavardeRef.current.value,
                pareigos: pareigosRef.current.value,
                atlyginimas: atlyginimasRef.current.valueAsNumber
            }
        
            props.pridejimas(naujasDarbuotojas)
        
            vardasRef.current.value = ''
            pavardeRef.current.value = ''
            pareigosRef.current.value = ''
            atlyginimasRef.current.value = ''
    }
  return (
    <div>
        <h3>Pridėti darbuotoją</h3>
        <form onSubmit={onSubmitFormaHandler}>
            <div>
                <label htmlFor="vardas">Vardas:</label>
                <input ref={vardasRef} type="text" id='vardas' />
            </div>
            <div>
                <label htmlFor="pavarde">Pavardė:</label>
                <input ref={pavardeRef} type="text" id='pavarde' />
            </div>
            <div>
                <label htmlFor="pareigos">Pareigos:</label>
                <input ref={pareigosRef} type="text" id='pareigos' />
            </div>
            <div>
                <label htmlFor="atlyginimas">Atlyginimas:</label>
                <input ref={atlyginimasRef} type="number" id='atlyginimas' />
            </div>
            <div>
                <button type='submit'>Pridėti</button>
            </div>
        </form>
    </div>
  )
}

export default DarbuotojoIvedimas