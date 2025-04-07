import React from 'react'
import Delione from './Delione'

const HobiuParduotuve = () => {
    let delione1 = {
        pavadinimas: 'Džiunglės', kiekis: 500, plotis: 50, aukstis: 60
    }

    let delione2 = {
        pavadinimas: 'Pastatas', kiekis: 1000, plotis: 100, aukstis: 150
    }

    let delione3 = {
        pavadinimas: 'Šuniukas', kiekis: 100, plotis: 30, aukstis: 40
    }


  return (
    <div>
        <Delione delioneData={delione1} />
        <Delione delioneData={delione2} />
        <Delione delioneData={delione3} />
    </div>
  )
}

export default HobiuParduotuve