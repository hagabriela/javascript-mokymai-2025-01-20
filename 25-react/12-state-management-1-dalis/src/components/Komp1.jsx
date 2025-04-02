import React from 'react'
// importuojama biblioteka, tai svarbu!!!
import { useState } from 'react'

const Komp1 = () => {
    // let skaicius = 0 
    // let kaipGauti = 0
    // const kaipGauti = 0
    // let (arba geriau vartoti const) paprastas variantas dažniau, 
    // kai kintamasis kuriamas f-joje

    // react hook
    // kintamasis kuriasi kitokiu būdu
    // const [kaipGauti, kaipPerrasyti] = useReactHookas(parametrai)
    // const [get, set] = useReactHookas(parametrai)
    // const [geteris, seteris] = useReactHookas(parametrai)
    // Get - kintamąjį gaunam, set - kintamąjį perrašom
    // setSkaicius naudojamas kaip f-ja setSkaicius()
    // 0 čia nustatomas kaip pradinė reikšmė useState(0)
    // useReactHookas skirtas kintamojo stebėjimui, naudojimui, atnaujinimui
    // kuriasi taip tik tada, kai kintamąjį norima atnaujinti
    const [skaicius, setSkaicius] = useState(0)

    // let kitas = 0 //NEVEIKIA

    const didinti = () => {
        // alert('didinam')
        setSkaicius(skaicius + 1)
        // setSkaicius(80) // Galima naują reikšmę nustatyti į kurią norima perrašyti

        // setSkaicius(skaicius++) // NEVEIKIA - nes čia modifikuoja tą patį kintamąjį
        // kitas += 1 // NEVEIKIA
    }

    const mazinti = () => {
        setSkaicius(skaicius - 1)
    }

  return (
    <div>
        <h2>Counter</h2>
        <button onClick={didinti}>Didinti</button>
        <button onClick={mazinti}>Mažinti</button>
        <p>Dabar yra: {skaicius}</p>
        {/* <p>Dabar yra: {kitas}</p> NEVEIKIA */}
    </div>
  )
}

export default Komp1