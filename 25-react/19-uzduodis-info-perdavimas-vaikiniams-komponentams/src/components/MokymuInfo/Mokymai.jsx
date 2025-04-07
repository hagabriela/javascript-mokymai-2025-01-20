import React from 'react'
import Modulis from './Modulis'

const Mokymai = () => {
    let moduliai = [
        { pavadinimas: 'html', trukme: 10},
        { pavadinimas: 'css', trukme: 68},
        { pavadinimas: 'javascript', trukme: 120},
        { pavadinimas: 'react', trukme: 84},
    ]

  return (
    <div>
        <h2>Mokymai</h2>
        <div>
            {
                moduliai.map((modulis, i) => {
                    return <Modulis key={i} modul={modulis} />
                })
            }
        </div>
    </div>
  )
}

export default Mokymai