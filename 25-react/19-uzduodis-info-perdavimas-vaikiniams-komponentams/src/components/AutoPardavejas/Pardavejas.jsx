import React from 'react'
import Automobilis from './Automobilis'

const Pardavejas = () => {
    let automobilis = {
        marke: 'Audi',
        modelis: 'A4',
        metai: 2016,
        rida: 120000,
        kaina: 23000
    }

  return (
    <div>
        <h2>Pardavėjas</h2>
        <Automobilis data={automobilis} />
    </div>
  )
}

export default Pardavejas