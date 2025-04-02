import React from 'react'

const Komp8 = () => {
    // iki perkrovimo puslapio sk visada bus vienas ir tas pats
    let slaptasSk = Math.floor(Math.random() * 3) + 1
    // console.log(slaptasSk);
    
    const speti1SkHandler = () => {
        alert(slaptasSk === 1 ? 'Atspėjote!' : 'Neatspėjote!')
    }

    const speti2SkHandler = () => {
        alert(slaptasSk === 2 ? 'Atspėjote!' : 'Neatspėjote!')
    }

    const speti3SkHandler = () => {
        alert(slaptasSk === 3 ? 'Atspėjote!' : 'Neatspėjote!')
    }

  return (
    <div>
        <h2>Komp8</h2>
        <button onClick={speti1SkHandler}>Spėjimas 1</button>
        <button onClick={speti2SkHandler}>Spėjimas 2</button>
        <button onClick={speti3SkHandler}>Spėjimas 3</button>
    </div>
  )
}

export default Komp8