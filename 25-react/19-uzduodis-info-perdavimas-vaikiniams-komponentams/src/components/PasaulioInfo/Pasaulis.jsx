import React from 'react'
import Salis from './Salis'

const Pasaulis = () => {
  let saliesPavadinimas = 'Egiptas'
  let saliesZemynas = 'Afrika'
  return (
    <div>
        <h2>Pasaulis</h2>
        <Salis pavadinimas="Lietuva" zemynas="Europa" />
        <Salis pavadinimas="Japonija" zemynas="Azija"/>
        <Salis pavadinimas={saliesPavadinimas} zemynas={saliesZemynas} />
    </div>
  )
}

export default Pasaulis