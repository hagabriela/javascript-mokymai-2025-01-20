import React from 'react'

const Komp6 = () => {
    const slaptasHandler = () => {
      // tikrinama kiekvieną kartą iš naujo, nes kintamasis yra f-joje
        let slaptassk = Math.floor(Math.random() * 10) + 1
        alert('Slaptas skaičius: ' + slaptassk)
    }

  return (
    <div>
        <h2>Komp6</h2>
        <button onClick={slaptasHandler}>Slaptas skaičius</button>
    </div>
  )
}

export default Komp6