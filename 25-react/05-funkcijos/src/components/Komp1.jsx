import React from 'react'

const Komp1 = () => {
    let skaicius = 57

    // vidinė f-ja komponente
    // arrow f-ja
    // čia galima ką norime ir kiek norime prisidėti
    // kas nepatogu su inline if
    const arLyginis = () => {
        if (skaicius % 2 === 0) {
            return 'lyginis'
        } else {
            return 'nelyginis'
        }
    }

    // standart function
    function isvedimas() {
        if (skaicius % 2 === 0) {
            return (
                <p>{skaicius} yra lyginis</p>
            )
        } else {
            return (
                <p>{skaicius} yra nelyginis</p>
            )
        }
    }

  return (
    <>
        <h2>Skaičiai ir skaičiavimai</h2>
        <p>{skaicius}</p>
        {/* paskaičiuoja ir išvedė ats */}
        <p>{ 4 + 5 }</p>
        <p>{ skaicius + 10 }</p>
        <p>{ skaicius * 2 }</p>
        {/* čia tik taip : ne arba tik taip */}
        <p>{ skaicius } yra { skaicius % 2 === 0 ? 'lyginis' : 'nelyginis' }</p>
        {/* iškviečiam f-ją */}
        <p>{ arLyginis() }</p>
        <p>{skaicius} yra {arLyginis()}</p> 
        {/* čia išvedama be <p></p>, nes jis išvedas f-joje */}
        { isvedimas() }
    </>
  )
}

export default Komp1

// eiga:
// kintamasis
// f-jos
// return - pab.