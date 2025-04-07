import React from 'react'
import Naujiena from './Naujiena'

const Kategorija = () => {
    let naujienos = [
        { pavadinimas: 'Infliacija', perziuros: 500, tekstas: 'Infliacija artimiausiu laiku nedidės'},
        { pavadinimas: 'Žvaigždės', perziuros: 5000, tekstas: 'Ir vėl naujos skyrybos'},
        { pavadinimas: 'Gyvūnai', perziuros: 15000, tekstas: 'Tora ieško naujų namų'},
    ]

  return (
    <div>
        <h2>Naujienos</h2>
        <div>
            {
                naujienos.map((naujiena, i) => {
                    return <Naujiena key={i} nauj={naujiena} />
                })
            }
        </div>
    </div>
  )
}

export default Kategorija