import React, { useRef } from 'react'

const ZodziuIvedimas = (props) => {
    const zodisRef = useRef()

    const formaSubmitHandler = (event) => {
        event.preventDefault()

        let naujasZodis = zodisRef.current.value

        if (naujasZodis === '') {
            return; // Jei žodis tuščias, nieko nedaryti
        }

        props.onNaujasZodis(naujasZodis)

        zodisRef.current.value = ''
    }

  return (
    <div>
        <form onSubmit={formaSubmitHandler}>
            <div>
                <label htmlFor="zodis">Įveskite žodį</label>
                <input ref={zodisRef} type="text" id='zodis' />
            </div>
            <div>
                <button type='submit'>Pridėti</button>
            </div>
        </form>
    </div>
  )
}

export default ZodziuIvedimas