import React from 'react'
import Preke from './Preke'

const Parduotuve = () => {
  return (
    <div>
        <h2>Parduotuvė</h2>
        {/* <Preke pavadinimas="Obuoliai" kaina={6} kiekis="100" /> jei norime kaip skaičių*/}
        <Preke pavadinimas="Obuoliai" kaina="6" kiekis="100" />
        <Preke pavadinimas="Kriaušės" kaina="9" kiekis="75" />
        <Preke pavadinimas="Agurkai" kaina="4" kiekis="98" />
    </div>
  )
}

export default Parduotuve