import React from 'react'

const Delione = ({delioneData}) => {

  const patikrinimas = () => {
    if (delioneData.kiekis < 500) {
      return 'lengva'
    } else if (delioneData.kiekis <= 1000) {
      return 'vidutinė'
    } else {
      return 'sunki'
    }
  }

  return (
    <div>
      <h3>Delionė {delioneData.pavadinimas}</h3>
      <p>Turi {delioneData.kiekis} detalių</p>
      <p>Jos dydis {delioneData.plotis} ant {delioneData.aukstis}</p>
      <p>Delionė { patikrinimas() }</p>
    </div>
  )
}

export default Delione