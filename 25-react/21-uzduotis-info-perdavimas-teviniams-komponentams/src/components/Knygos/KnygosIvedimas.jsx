import React from 'react'
import { useRef } from 'react'

const KnygosIvedimas = (props) => {
        const pavadinimasRef = useRef()
        const kainaRef = useRef()
        const metaiRef = useRef()
    
        const onSubmitFormaHandler = (event) => {
            event.preventDefault() 
            
            let naujaKnyga = {
                pavadinimas: pavadinimasRef.current.value,
                kaina: kainaRef.current.valueAsNumber,
                metai: metaiRef.current.valueAsNumber
            }
    
            props.pridejimas(naujaKnyga)
    
            pavadinimasRef.current.value = ''
            kainaRef.current.value = ''
            metaiRef.current.value = ''
        }
  return (
    <div>
        <h3>Pridėti knygą</h3>
        <form onSubmit={onSubmitFormaHandler}>
            <div>
                <label htmlFor="pavadinimas">Pavadinimas:</label>
                <input ref={pavadinimasRef} type="text" id='pavadinimas' />
            </div>
            <div>
                <label htmlFor="kaina">Kaina:</label>
                <input ref={kainaRef} type="number" id='kaina' />
            </div>
            <div>
                <label htmlFor="metai">Metai:</label>
                <input ref={metaiRef} type="number" id='metai' />
            </div>
            <div>
                <button type='submit'>Pridėti</button>
            </div>
        </form>
    </div>
  )
}

export default KnygosIvedimas