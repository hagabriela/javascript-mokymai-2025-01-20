import React from 'react'

const Komp2 = () => {
    const inputHandler = (event) => {
        let skaicius = event.target.valueAsNumber
        // let skaicius = parseInt(event.target.value)
        // console.log(skaicius);

        if (skaicius === 100) {
            alert('Sveikinu, pasiekėte 100!')
        }
    }
  return (
    <div>
        <h2>Komp2</h2>
        <input onInput={inputHandler} type="number" />
    </div>
  )
}

export default Komp2