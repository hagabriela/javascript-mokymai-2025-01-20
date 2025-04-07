import React from 'react'

const Automobilis = (props) => {
  return (
    <div>
        <h3>{props.data.marke} {props.data.modelis}</h3>
        <p>Automobilis {props.data.metai} m. </p>
        <p>Automobilio rida {props.data.rida} km</p>
        <p>Automobilio kaina {props.data.kaina} eur.</p>
    </div>
  )
}

export default Automobilis