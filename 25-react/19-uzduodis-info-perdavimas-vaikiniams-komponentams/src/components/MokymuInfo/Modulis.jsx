import React from 'react'

const Modulis = (props) => {
    let { pavadinimas, trukme } = props.modul 

  return (
    <div>
        <h3>{pavadinimas}</h3>
        <p>{trukme} val.</p>
    </div>
  )
}

export default Modulis