import React from 'react'

const Komp7 = () => {
    // čia, kad tikrintų per naujo, reikia refrešint, 
    // nes kintamasis sukurtas prieš f-ją
    // let sk = 14
    let sk = Math.floor(Math.random() * 20) + 1

    const patikrintiSkHandler = () => {
        if (sk > 10) {
            alert('Skaičius didesnis už 10')
        } else {
            alert('Skaičius mažesnis arba lygus 10')
        }
    }
    
  return (
    <div>
        <h2>Komp7</h2>
        <button onClick={patikrintiSkHandler}>Patikrinti skaičių</button>
    </div>
  )
}

export default Komp7
