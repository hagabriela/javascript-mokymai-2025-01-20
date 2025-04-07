import React from 'react'

// props arba bet koks kitas žodis, pvz.: duomenys
const Preke = (props) => {
    // console.log(props);
    
  return (
    <div>
        <h3>{props.pavadinimas}</h3>
        <p>Prekyboje turime <strong>{props.kiekis}</strong> vnt.</p>
        <p>Kaina <strong>{props.kaina}</strong> eur.</p>

    </div>
  )
}

export default Preke