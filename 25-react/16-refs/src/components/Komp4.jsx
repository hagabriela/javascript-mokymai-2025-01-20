import React from 'react'
import { useRef, useState } from 'react'

const Komp4 = () => {
    const [automobiliai, setAutomobiliai] = useState([])

    const markeRef = useRef()
    const modelisRef = useRef()
    const metaiRef = useRef()
    // masyvas su objektu

    const newCarHandler = (event) => {
        event.preventDefault()
        // alert('submittina')
        // console.log({markeRef, modelisRef, metaiRef});

        // sukuriame naują objektą
        // visą laiką objektas bus formuojamas tokio formato (markė, modelis, metai)
        let naujasAutomobilis = {
            marke: markeRef.current.value,
            modelis: modelisRef.current.value,
            metai: metaiRef.current.valueAsNumber
        }
        // console.log(naujasAutomobilis);

        // prideda į viršų / priekį
        // setAutomobiliai([naujasAutomobilis,...automobiliai])

        // prideda į apačią / galą
        setAutomobiliai([...automobiliai, naujasAutomobilis])


        // console.log(automobiliai);

        markeRef.current.value = ''
        modelisRef.current.value = ''
        metaiRef.current.value = ''
    }

    const naujausiasAutomobilis = () => {
        let naujausias = automobiliai[0]
        // jei ieškome mažiausio sk.
        // nerašome 0, nes jis visada bus mažiausias, jei skaičiai teigiami

        for (const auto of automobiliai) {
            if (auto.metai > naujausias.metai) {
                naujausias = auto
            }
        }
        return naujausias
        // return visą objektą, kuris turi tuos pačius raktus (marke, metai, modelis)
    }

  return (
    <div>
        <h2>Automobiliai</h2>
        <form onSubmit={newCarHandler}>
            <div>
                <label htmlFor="marke">Markė:</label>
                <input ref={markeRef} type="text" id='marke' />
            </div>
            <div>
                <label htmlFor="modelis">Modelis:</label>
                <input ref={modelisRef} type="text" id='modelis' />
            </div>
            <div>
                <label htmlFor="metai">Metai:</label>
                <input ref={metaiRef} type="number" id='metai' />
            </div>
            <div>
                <button type='submit'>Įvesti</button>
            </div>  
        </form>
        {
            automobiliai.length > 0 &&
            <table border={1}>
                <thead>
                    <tr>
                        <th>Markė</th>
                        <th>Modelis</th>
                        <th>Metai</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        automobiliai.map((auto, index) => {
                            return (
                                <tr key={index}>
                                    <td>{auto.marke}</td>
                                    <td>{auto.modelis}</td>
                                    <td>{auto.metai}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        }
        {
            automobiliai.length > 0 &&
            <div>
                Naujausias automobilis: {" "}
                {/* rašome su raktu, nes f-ja atiduoda visą objektą */}
                {/* + " " - kitas būdas tarpams vietoj &nbsp */}
                { naujausiasAutomobilis().marke + " "} 
                { naujausiasAutomobilis().modelis + " " }
                { naujausiasAutomobilis().metai + " " }
            </div>
        }
    </div>
  )
}

export default Komp4