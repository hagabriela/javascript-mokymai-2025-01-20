import React from 'react'

const Komp9 = () => {
    let slaptasSk = Math.floor(Math.random() * 3) + 1

    const spetiSkHandler = (spejimas) => {
        console.log(spejimas);
        alert(slaptasSk === spejimas ? 'Atspėjote!' : 'Neatspėjote!')
    }

  return (
    <div>
        <h2>Komp9</h2>
        {/* daroma su f-ja, nes kitaip išlenda alert'as net nepaspaudus ant mygtuko */}
        <button onClick={ () => spetiSkHandler(1) }>Spėjimas 1</button>
        <button onClick={ () => spetiSkHandler(2) }>Spėjimas 2</button>
        <button onClick={ () => spetiSkHandler(3) }>Spėjimas 3</button>
    </div>
  )
}

export default Komp9

