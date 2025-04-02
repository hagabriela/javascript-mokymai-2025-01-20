import React from 'react'
import { useState } from 'react'

const Komp5 = () => {
    const [pasirinkimas, setPasirinkimas] = useState('-')

    const pasirinkimoHandler = (event) => {
        // alert('Pasirinkimas: ' + event.target.innerText)

        // console.log(event.target.innerText);

        // iš mygtuko pasiima tekstą - jo pavadinimą
        let naujasPasirinkimas = event.target.innerText
        // let naujasPasirinkimas = 'React'  ...

        setPasirinkimas(naujasPasirinkimas)
        // pasirinkimas = naujasPasirinkimas
        // pasirinkimas = 'React' ...

        // arba:
        // setPasirinkimas(event.target.innerText)
    }

    // čia naudojamas kintamasis state - pasirinkimas
    // pats išsikvies ir matysim naujausią info
    const tikrinti = () => {
        // console.log('tikrinimas iskviestas');

        switch (pasirinkimas) {
            case 'HTML':
                return 'HTML - tai žymėjimo kalba'
            case 'CSS':
                return 'CSS - tai stiliaus kalba'   
            case 'JavaScript':
                return 'JavaScript - tai programavimo kalba' 
            case 'React':
                return 'React - tai biblioteka' 
            default:
                return 'Nepasirinkta'
        }
    }

  return (
    <div>
        <h2>Pasirinkimas</h2>
        <p>Labiausiai patiko:</p>
        {/* čia nėra (), nes event (pvz.:onClick) supranta, kad yra kviečiama f-ja, jos ir tikisi */}
        <button onClick={pasirinkimoHandler}>HTML</button>
        <button onClick={pasirinkimoHandler}>CSS</button>
        <button onClick={pasirinkimoHandler}>JavaScript</button>
        <button onClick={pasirinkimoHandler}>React</button>
        <p>Pasirinkote: {pasirinkimas}</p>
        {/* tikrinti() su (), nes nėra onClick ar kito evento */}
        <p>{ tikrinti() }</p> 
    </div>
  )
}

export default Komp5