import React from 'react'

const Skaicius = () => {
    let skaicius = 29

    const arLyginis = () => {
        if (skaicius % 2 === 0) {
            return 'Taip'
        } else {
            return 'Ne'
        }
    }

    const arTeigiamas = () => {
        if (skaicius >= 0) {
            return 'Taip'
        } else {
            return 'Ne'
        } 
    }
  return (
    <div>
        <p>{skaicius}</p>
        <p>Ar {skaicius} lyginis: {arLyginis()}</p>
        <p>Ar {skaicius} teigiamas: {arTeigiamas()}</p>
    </div>
  )
}

export default Skaicius