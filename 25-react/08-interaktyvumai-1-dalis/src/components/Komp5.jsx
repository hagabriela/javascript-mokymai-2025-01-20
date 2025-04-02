import React from 'react'

const Komp5 = () => {
    const mygtukoHandler = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.textContent);
        alert ('Paspaudei: ' + event.target.textContent + ' mygtuką')
    }

  return (
    <div>
        <h2>Komp5</h2>
        {/* kadangi ten yra vienas žodis (event - bet gali būti bet koks) 
        čia nebenorodomas (event)*/}
        <button onClick={mygtukoHandler}>Pirmas</button>
        <button onClick={mygtukoHandler}>Antras</button>
    </div>
  )
}

export default Komp5