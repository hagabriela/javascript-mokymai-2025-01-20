import React from 'react'

// komponente galima turėti kelias f-jas
const Komp2 = () => {
    let skaicius1 = 34
    let skaicius2 = 52

    const didesnis = () => {
        if (skaicius1 > skaicius2) {
            return `${skaicius1} didesnis už ${skaicius2}`
        } else if (skaicius1 < skaicius2) {
            return `${skaicius2} didesnis už ${skaicius1}`
        } else {
            return `${skaicius1} ir ${skaicius2} yra lygūs`
        }
    }

    // standart, ne arrow f-ja
    // galima ir taip kurti
    // geriausia laikytis vieno formato,
    // nors ir nėra klaida
    function mazesnis() {
        if (skaicius1 < skaicius2) {
            return `${skaicius1} mažesnis už ${skaicius2}`
        } else if (skaicius1 > skaicius2) {
            return `${skaicius2} mažesnis už ${skaicius1}`
        } else {
            return `${skaicius1} ir ${skaicius2} yra lygūs`
        }
    }

  return (
    <>
        <h2>Didesnis / mažesnis skaičius</h2>
        <p>Turimi skaičiai: {skaicius1} ir {skaicius2}</p>
        <p>{ didesnis() }</p>
        <p>{ mazesnis() }</p>
    </>
  )
}

export default Komp2