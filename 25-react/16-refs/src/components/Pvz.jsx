import React from 'react'
import { useRef } from 'react'  // svarbu importuotis Ref

const Pvz = () => {
    // document.querySelector('p').textContent //REFS šito analogas
    let paragrafas = useRef() // Refs naudojamas !!!
    // let paragrafas = document.querySelector('p') // paprastam JS
    // nesvarbu paragrafas / input / mygtukas / div ...

    const mygtukoHandler = () => {
        // console.log(event.target.textContent); // spausti
        // console.log(paragrafas); // objektas p
        // console.log(paragrafas.current); // <p>tekstas</p>
        console.log(paragrafas.current.textContent); // tekstas
    }

  return (
    <div>
        <p ref={paragrafas}>tekstas</p> {/* HTML žyma sujungta su kintamuoju */}
        <button onClick={mygtukoHandler}>spausti</button> {/* mygtukas su f-ja surištas */}
    </div>
  )
}

export default Pvz




