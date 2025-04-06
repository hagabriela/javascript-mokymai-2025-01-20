import React from 'react'
import { useState, useRef } from 'react'

const Prekes = () => {
    const [prekes, setPrekes] = useState([])
    
    const pavadinimasRef = useRef()
    const kainaRef = useRef()
    const kiekisRef = useRef()

    const naujaPrekeHandler = (event) => {
        event.preventDefault()

        let naujaPreke = {
            pavadinimas: pavadinimasRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
            kiekis: kiekisRef.current.valueAsNumber
        }

        setPrekes([naujaPreke, ...prekes])

        pavadinimasRef.current.value = ''
        kainaRef.current.value = ''
        kiekisRef.current.value = ''
    }

    const onIsvalytiClickHandler = () => {
        setPrekes([])
    }

    
    const mazaiLikusiuPrekiu = () => {
        return prekes.filter(preke => preke.kiekis < 5)
    }

    // const mazaiLikusiuPrekiu = () => {
    //     let mazaiPrekes = []
    // 
    //     for (let preke of prekes) {
    //         if (preke.kiekis < 5) {
    //             mazaiPrekes.push(preke) // Pridėti į masyvą, jei prekei mažiau nei 5 vnt.
    //         }
    //     }
    
    //     return mazaiPrekes
    // }

  return (
    <div>
        <h2>Prekės</h2>
        <form onSubmit={naujaPrekeHandler}>
            <div>
                <label htmlFor="pavadinimas">Pavadinimas:</label>
                <input ref={pavadinimasRef} type="text" id='pavadinimas' />
            </div>
            <div>
                <label htmlFor="kaina">Kaina:</label>
                <input ref={kainaRef} type="number" id='kaina' />
            </div>
            <div>
                <label htmlFor="kiekis">Kiekis:</label>
                <input ref={kiekisRef} type="number" id='kiekis' />
            </div>
            <div>
                <button type='submit'>Įvesti</button>
            </div>  
        </form>
        <div>
            <h3>Visos prekės:</h3>
            {
                prekes.length === 0 ? (
                    <p>Kol kas nėra įvestų prekių</p>
                ) : (
                    prekes.map((preke, index) => (
                        <div key={index}>
                            <p><strong>Pavadinimas:</strong> {preke.pavadinimas}</p>
                            <p><strong>Kaina:</strong> {preke.kaina} €</p>
                            <p><strong>Kiekis:</strong> {preke.kiekis} vnt</p>
                        </div>
                    ))
                )
            }
        </div>
        {
            prekes.length > 0 && <button onClick={onIsvalytiClickHandler}>Išvalyti</button>
        }
        {
            prekes.length > 0 &&
            <div>
                <h3>Prekės, kurių liko mažai (mažiau nei 5 vnt):</h3>
                {
                    
                        mazaiLikusiuPrekiu().map((preke, index) => (
                            <div key={index}>
                                <p><strong>Pavadinimas:</strong> {preke.pavadinimas}</p>
                                <p><strong>Kiekis:</strong> {preke.kiekis} vnt</p>
                            </div>
                        ))
                }
            </div>
        }
    </div>
  )
}

export default Prekes