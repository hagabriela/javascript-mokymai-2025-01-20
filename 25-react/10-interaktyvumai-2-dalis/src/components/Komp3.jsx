import React from 'react'

const Komp3 = () => {
    let zodis = 'azuolas'

    const inputHandler = (event) => {
        let ivestasZodis = event.target.value
        if (zodis === ivestasZodis) {
            console.log('Sveikinu, atspėjote žodį!')
        } else {
            console.log('Bandykite dar kartą!')
        }

    }
  return (
    <div>
        <h2>Komp3</h2>
        {/* JS:
            onInput - kas raidę
            onChange - po visko
            React:
            reaguoja vienodai, todėl ne alert, console log */}
        <input type="text" onChange={inputHandler} />
    </div>
  )
}

export default Komp3