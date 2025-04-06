import React from 'react'
import { useState, useRef } from 'react' // eiliškumas nesvarbus, galima ir atskirose eilutėse 

const Komp1 = () => {
    // kad turėtume kintamuosius - useState
    const [salis, setSalis] = useState('')

    // tą akimirką kaip žymą pasiekti - useRef
    const salisInputRef = useRef()
    // kaip document.querySelector arba getDocumentById

    const ivestiSalisHandler = () => {
        // console.log(event.target) // čia neveikia, nes event ir yra mygtukas
        // console.log(salisInputRef); //inputšalis
        // console.log(salisInputRef.current.value);
        setSalis(salisInputRef.current.value); // info gautą iš input įdedama į kintamąjį, ir pasikeitęs kintamasis iš naujo atspausdinamas
    }

  return (
    <div>
        <h2>Mėgstamiausia šalis</h2>
        <div>
            <label htmlFor="salis">Įveskite šalį:</label>
            <input type="text" ref={salisInputRef} id='salis' /> {/* imama info iš čia */} {/* šis input yra kintamasis komponento ribose */}
            <button onClick={ivestiSalisHandler}>Įvesti</button> {/* reaguojama į mygtuko paspaudimą */}
        </div>
        <p>Jūs įvedėte: {salis}</p>
    </div>
  )
}

export default Komp1

// React hooks - useRef, useState, useEffect... // prasideda su "use" ir yra ()
// Ref - reference - nuoroda į tam tikrą elementą

// Ref ir onClick gali egzistuoti vienas be kito, bet
// šiuo atveju apjungta, kad paspaudžiant pasiimti iš kitos žymos info.

