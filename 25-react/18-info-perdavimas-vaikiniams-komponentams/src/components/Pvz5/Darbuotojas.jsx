import React from 'react'

const Darbuotojas = (props) => {
    // console.log(props);

    // Kad nereikėtų kiekvieną kartą eiti per props 
    // ir imti darbuotojo objektą 
    // ir tik tada reikalingą informaciją, 
    // galima props esančio darbuotojo objekto informaciją užsisaugoti 
    // prie atskiro komponento kintamojo
    let darb = props.darbuotojas
    // kuriamas atskiras kintamasis, nes kintamasis ir raktas vadinasi skirtingai
    // ({ darbuotojas}) - panašu
    
  return (
    <div>
        <h3>{darb.vardas} {darb.pavarde}</h3>
        <p>Yra {darb.amzius} m. amžiaus</p>
        <p>Dirba kaip: {darb.pareigos}</p>
        <p>Uždirba {darb.atlyginimas} eur.</p>
    </div>
  )
}

export default Darbuotojas