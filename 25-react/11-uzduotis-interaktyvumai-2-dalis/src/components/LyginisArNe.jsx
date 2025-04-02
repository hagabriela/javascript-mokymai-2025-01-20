import React from 'react'

const LyginisArNe = () => {
    const arLyginisHandler = (event) => {
        let skaicius = event.target.valueAsNumber

        if (skaicius % 2 == 0) {
            console.log(`${skaicius} yra lyginis`);
        } else {
            console.log(`${skaicius} yra nelyginis`);
        }
    }

  return (
    <div>
        <h2>Lyginis Ar Ne</h2>
        <input type="number" onInput={arLyginisHandler}/>
    </div>
  )
}

export default LyginisArNe