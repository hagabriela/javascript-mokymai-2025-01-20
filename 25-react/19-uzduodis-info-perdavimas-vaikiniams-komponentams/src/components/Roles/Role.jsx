import React from 'react'

const Role = (props) => {
    const patikrinti = () => {
        if (props.kiekis >= 20) {
            return 'Labai daug vartotojų turi prisijungimą'
        } else {
            return 'Nedaug vartotojų turi prisijungimą'
        }
    }

  return (
    <div>
        <h3>Rolė: {props.pavadinimas}</h3>
        <p>{props.kiekis} vartotojų turi šią rolę</p>
        <p>{ patikrinti() }</p>
    </div>
  )
}

export default Role