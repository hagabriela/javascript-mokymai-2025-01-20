import React, { use } from 'react'
import { useState, useRef } from 'react'

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([]) // su masyvu
    // const [pazymiai, setPazymiai] = useState([10, 8 ,7 9]) // galima pradžioj su sk. padaryti

    const pazymysInputRef = useRef()

    const onPazymiaiSubmitHandler = (event) => {
        event.preventDefault() // su event (tik dėl šito jis naudojamas) ir puslapis nepersikrauna, paspaudus mygtuką. Nori persikrauti, nes nori siųsti info., bet nėra kur
        // alert('submittina') // kadangi ant formos onSubmit ši f-ja, tai veikia paspaudus mygtuką ir enter (nes vienas input) - submitinus
        // console.log(event.target.elements[0]); // teoriškai  
       
        let naujasPazymys = pazymysInputRef.current.valueAsNumber;
       //  console.log(naujasPazymys);
       
       // Pildome naują masyvą. Įkeliame pažymį į naują masyvą. 
       // Tai darome sukuriant masyvo kopiją - naują masyvą (seni + nauji duomenys), ne su Push - kaip paprastam JS
       setPazymiai([...pazymiai, naujasPazymys])
       // setPazymiai(ankstesniPazymiai => {
       //     return [pazymys, ...ankstesniPazymiai]
       // })

       // setPazymiai(naujasPazymys) - išmetam masyvą ir įdedame skaičių, todėl neveikia
       
       // išvalome input po įvedimo   
       pazymysInputRef.current.value = ''

    //    console.log(pazymiai);
    }

    // nustato pažymiams naują tuščią masyvą - išvalo
    const onIsvalytiClickHandler = () => {
        setPazymiai([])
    }

    const vidurkis = () => {
        return (pazymiai.reduce((a, b) =>  a + b, 0) / pazymiai.length).toFixed(2)
    }

  return (
    <div>
        <h2>Studento vidurkis</h2>
        <form onSubmit={onPazymiaiSubmitHandler}>
            <label htmlFor="pazymys">Įveskite pažymį:</label>
            <input ref={pazymysInputRef} type="number" min={1} max={10} />
            <button type='submit'>Įvesti</button>
        </form>
        {
            // spausdina info. tik tada, kai masyve yra pažymių
            pazymiai.length > 0 &&
            <div>
                    <h3>Įvesti pažymiai</h3>
                    <p>{ pazymiai.join(', ') }</p>
            </div>
        }
        {/* {
            // pazymiai.map((p, i) => <p key={i}>{p}</p>)
        } */}
        {
            pazymiai.length > 0 &&
            <div>
                <h3>Išvestų pažymių vidurkis</h3>
                <p>{ vidurkis() }</p>
            </div>
        }
        {
            // mygtukas atsiranda, kai yra pažymių
            pazymiai.length > 0 && <button onClick={onIsvalytiClickHandler}>Išvalyti</button>
        }
        {/* {
            pazymiai.length > 0 &&
            <>
             <div>
                    <h3>Įvesti pažymiai</h3>
                    <p>{ pazymiai.join(', ') }</p>
            </div>

             <div>
                <h3>Išvestų pažymių vidurkis</h3>
                <p>{ vidurkis() }</p>
            </div>

            <button onClick={onIsvalytiClickHandler}>Išvalyti</button>
            </>
        } */}
    </div>
  )
}

export default Komp3


