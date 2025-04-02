import React from 'react'

const Skaiciai = () => {
    let skaiciai = [10, 5, 8, 29]

    const sum = () => {
        let suma = 0
        for (const skaicius of skaiciai) {
            suma += skaicius
        }
        return alert(suma)
    }

    const didziausias = () => {
        let max = skaiciai[0]
        for (const skaicius of skaiciai) {
            if (skaicius > max) {
                max = skaicius
            }
        }
        return alert(max)
    }

  return (
    <div>
        <h2>Skaičiai</h2>
        <button onClick={sum}>Skaičių suma</button>
        <button onClick={didziausias}>Didžiausias skaičius</button>
    </div>
  )
}

export default Skaiciai