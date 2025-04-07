import React, { useState } from 'react'
import ZodziuIvedimas from './ZodziuIvedimas'

const ZodziuBendras = () => {
    const [zodziai, setZodziai] = useState([])

    const onNaujasZodisHandler = (naujasZodis) => {
        setZodziai([naujasZodis,...zodziai])
    }

    const ilgiausias = () => {
        let ilgiausiasZodis = zodziai[0] 
        zodziai.forEach(zodis => {
            if (zodis.length > ilgiausiasZodis.length) {
                ilgiausiasZodis = zodis
            }
        })
        return ilgiausiasZodis
    }

  return (
    <div>
        <h2>Žodžiai</h2>
        <ZodziuIvedimas onNaujasZodis={onNaujasZodisHandler} />
        {
            zodziai.length > 0 &&
            <p>Ilgiausias žodis: { ilgiausias() }</p>
        }
         {
            zodziai.length > 0 && 
            <ul>
                {zodziai.map((zodis, index) => {
                    return (
                        <li key={index}>{zodis}</li> 
                    )
                })}
            </ul>
        }
        {
            zodziai.length === 0 && 
            <p>Deja, nėra įvestos informacijos.</p>
        }
    </div>
  )
}

export default ZodziuBendras