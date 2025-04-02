import React from 'react'

const Sansas = () => {
    let atsitiktinisSk = Math.floor(Math.random() * 10) + 1

    const patikrinti = () => {
        if (atsitiktinisSk >= 5) {
            alert('laimėjote')
        } else (
            alert('pralaimėjote')
        )
    }

  return (
    <div>
        <h2>Šansas</h2>
        <button onClick={patikrinti}>Bandyti</button>
    </div>
  )
}

export default Sansas