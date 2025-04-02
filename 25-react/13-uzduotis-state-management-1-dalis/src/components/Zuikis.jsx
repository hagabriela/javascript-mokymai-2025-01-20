import React from 'react'
import { useState } from 'react'

const Zuikis = () => {
    const [arPersoko, setArPersoko] = useState(false)

    const pakeisti = () => {
        let random = Math.random() < 0.5; // 50% tikimybė gauti false arba true
        setArPersoko(random);
    }

    const persoko = () => {
        setArPersoko(true);
    }

  return (
    <div>
        <h2>Zuikis</h2>
        <button onClick={pakeisti}>Pakeisti</button>
        <button onClick={persoko}>Peršoko</button>
        <p>Ar zuikis peršoko griovį: {arPersoko ? 'taip' : 'ne'}</p>
    </div>
  )
}

export default Zuikis