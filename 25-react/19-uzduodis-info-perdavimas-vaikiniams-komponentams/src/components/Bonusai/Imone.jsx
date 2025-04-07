import React from 'react'
import Darbuotojas from './Darbuotojas'

const Imone = () => {
  return (
    <div>
        <h2>Įmonė</h2>
        <Darbuotojas vardas="Aurimas" pavarde="Aurimaitis" bonusas={0} />
        <Darbuotojas vardas="Jonas" pavarde="Jonaitis" bonusas={50} />
        <Darbuotojas vardas="Toma" pavarde="Tomaitė" bonusas={500} />
    </div>
  )
}

export default Imone