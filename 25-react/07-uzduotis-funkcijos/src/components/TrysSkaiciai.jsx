import React from 'react'

const TrysSkaiciai = () => {
    let skaicius1 = 5
    let skaicius2 = 29
    let skaicius3 = 170

    const isvedimas = () => {
       return <p>Skaičiai: {skaicius1}, {skaicius2}, {skaicius3}</p>
    }

    const didziausias = () => {
        if (skaicius1 > skaicius2 && skaicius1 > skaicius3) {
            return <p>{skaicius1} yra didžiausias skaičius</p>
        } else if (skaicius2 > skaicius1 && skaicius2 > skaicius3) {
            return <p>{skaicius2} yra didžiausias skaičius</p>
        } else if (skaicius3 > skaicius1 && skaicius3 > skaicius2) {
            return <p>{skaicius3} yra didžiausias skaičius</p>
        } else if (skaicius1 == skaicius2 && skaicius1 == skaicius3) {
            return <p>skaičiai yra lygūs</p>
        }
    }

    const suma = () => {
        return <p>Skaičių suma yra {skaicius1 + skaicius2 + skaicius3}</p>
    }

  return (
    <div>
        {isvedimas()}
        {didziausias()}
        {suma()}
    </div>
  )
}

export default TrysSkaiciai