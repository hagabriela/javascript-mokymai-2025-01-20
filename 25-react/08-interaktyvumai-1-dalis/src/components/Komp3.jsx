import React from 'react'

const Komp3 = () => {
    const mygtukasHandler = () => {
        console.log('Paspaudei mygtuką');
    }

  return (
    <div>
        <h2>Komp3</h2>
        {/* reaguoja tik tas mygtukas ant kurio uždėtas onClick */}
        <button onClick={mygtukasHandler}>Mygtukas</button>
        <button>Kitas mygtukas</button>
    </div>
  )
}

export default Komp3