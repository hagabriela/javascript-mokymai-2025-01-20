import React from 'react'
import { useRef, useState } from 'react'

const Komp2 = () => {
    // info po kiekvieno paspaudimo keičiasi, todėl kintamieji su useState
    // galutinės žodžių, iš input, reikšmės

    // įdėtos gautos reiškmės į kintamuosius
    const [pirmasZodis, setPirmasZodis] = useState('')
    const [antrasZodis, setAntrasZodis] = useState('')

    const pirmasZodisRef = useRef()
    const antrasZodisRef = useRef()

    // mygtuko f-ja ir gauna abu kintamuosiuos, kurie surišti su input'ais
    const ivestiHandler = () => {
        // alert('paspaustas mygtukas')
        // console.log({
        //     pirmasZodisRef,
        //     antrasZodisRef
        // });
        
        const zodis1 = pirmasZodisRef.current.value
        const zodis2 = antrasZodisRef.current.value
        // console.log({zodis1, zodis2});

        // gavome reišmes iš laukelių po paspaudimo
        setPirmasZodis(zodis1)
        // ARBA
        // setPirmasZodis(pirmasZodisRef.current.value)
        setAntrasZodis(zodis2)
        // setAntrasZodis(antrasZodisRef.current.value)
        
        // išsivalytų input - laukelis (ne žodis) po mygtuko paspaudimo - todėl po visko šis kodas
        pirmasZodisRef.current.value = ''
        antrasZodisRef.current.value = ''

        // Ref - net tik, kad pasiimti info. iš input, bet ir atlikti tam tikrus veiksmus su ta žyma
        // ant kuriuos Ref užsidėję esam
        // pvz.: išvalyti input / paragrafą perspalvinti
    }

    // f-ja išsikvies automatiškai, kai kintamieji pasikeis - žino React per set
    const daugiauARaidziu = () => {
        let pirmoAts = pirmasZodis.split('').filter(raide => raide === 'a').length // length - kiek A raidžių, sk., pvz.3
        // let pirmoAts = pirmasZodis.toLowerCase().split('').filter(raide => raide === 'a').length 
        let antroAts = antrasZodis.split('').filter(raide => raide === 'a').length
        
        if (pirmoAts > antroAts) {
            return pirmasZodis
        } else if (pirmoAts < antroAts) {
            return antrasZodis
        } else {
            return 'Abu lygūs'
        }
    }

  return (
    <div>
        <h2>Lyginti žodžius</h2>
        <div>
            <label htmlFor="pirmasZodis">Pirmas žodis:</label>
            <input type="text" ref={pirmasZodisRef} id='pirmasZodis' />
        </div>
        <div>
            <label htmlFor="antrasZodis">Antras žodis:</label>
            <input type="text" ref={antrasZodisRef} id='antrasZodis' />
        </div>
        <div>
            <button onClick={ivestiHandler}>Įvesti</button>
        </div>
        {
            // tik kai yra įvesti abu žodžiai matosi paragrafai
            // patikrinama (patikrinimo sąlyga) ar pirmas ir antras žodis (abudu) yra suvesti
            pirmasZodis && antrasZodis &&
            <>
                <div>
                    <p>Įvesti žodžiai:</p>
                    {/* išvedami galutiniai žodžiai, į kuriuos buvo įdėta info */}
                    <p>Pirmas: {pirmasZodis}</p>
                    <p>Antras: {antrasZodis}</p>
                </div>
                <div>
                    <p>Daugiau A raidžių yra žodyje: { daugiauARaidziu() }</p>
                </div>  
            </> 
        }  
    </div>
  )
}

export default Komp2

// Ant paprasto JS išsivalymas
// let inputas = document.querySelector('input')
// let zodis = inputas.value
// inputas.value = ''

// Ant REACT
// let inputasRef = useRef()
// let zodis = inputasRef.current.value
// inputasRef.curent.value = ''