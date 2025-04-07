// šis komponentas rūpinasi naujos prekės suvedimu,
// jame yra forma, kur vartotojas gali suvesti jam norimą info.
// tada yra suformuojamas naujos prekės objektas
// ir perduodamas į tėvinį komponentą

import React from 'react'
import { useRef } from 'react'

const PrekeNauja = (props) => {
    const pavadinimasRef = useRef()
    const kiekisRef = useRef()
    const kainaRef = useRef()

    // const formaHandler = (event) => {
    const handleSubmit = (event) => {
        event.preventDefault() // mes nesikreipiame į kitą puslapį (ko nori submitinta forma), lieka tame pačiame naršyklės lange

        // console.dir(pavadinimasRef);
        
        // suformulavome objektą, kuris atitinka mūsų duomenų struktūrą
        // PrekesWrapper.jsx masyvas - į jį dėsime duomenis
        // raktai paimti iš PrekesVisos.jsx
        let naujaPreke = {
            pavadinimas: pavadinimasRef.current.value,
            kiekis: kiekisRef.current.valueAsNumber,
            kaina: kainaRef.current.valueAsNumber
        }

        // alert('Pridėta nauja prekė')
        // console.log('iš vaikinio komponento:', naujaPreke);

        // pamėginsime jį išsiųsti į tėvinį komponentą
        // f-jai pavadinimą - galime sugalvoti patys
        // į argumentus - įsistatome suformuotą objektą
        props.pridejimas(naujaPreke)

        // išvalome formą
        pavadinimasRef.current.value = ''
        kiekisRef.current.value = ''
        kainaRef.current.value = ''
    }

  return (
    <div>
        <h3>Pridėti prekę</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="pavadinimas">Pavadinimas:</label>
                <input ref={pavadinimasRef} type="text" id='pavadinimas' />
            </div>
            <div>
                <label htmlFor="kiekis">Kiekis:</label>
                <input ref={kiekisRef} type="number" id='kiekis' />
            </div>
            <div>
                <label htmlFor="kaina">Kaina:</label>
                <input ref={kainaRef} type="number" id='kaina' />
            </div>
            <div>
                <button type='submit'>Pridėti</button>
            </div>
        </form>
    </div>
  )
}

export default PrekeNauja