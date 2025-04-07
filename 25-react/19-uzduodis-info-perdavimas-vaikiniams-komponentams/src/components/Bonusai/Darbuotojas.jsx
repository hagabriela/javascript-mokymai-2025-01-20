import React from 'react'

const Darbuotojas = ({vardas, pavarde, bonusas}) => {
    const patikrinimasBonuso = () => {
        if (bonusas == 0) {
            return 'gaila ☹'
        } else if (bonusas < 100) {
            return 'bent ant kebabo užmetė...'
        } else {
            return 'nu, jau kažkas geriau'
        }
    }

  return (
    <div>
        <h3>{vardas} {pavarde}</h3>
        <p>Gauna kalėdinio bonuso: {bonusas} eur.</p>
        <p>{ patikrinimasBonuso() }</p>
    </div>
  )
}

export default Darbuotojas