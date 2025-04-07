import React from 'react'
import { useState } from 'react'
import Mygtukai from './Mygtukai'

const Pasirinkimas = () => {
    const [tekstas, setTekstas] = useState('kol kas nieko nepasirinkta')

    // atejusiInfo buvo perduota iš Mygtukai.jsx
    // tekstasPasikeite yra metodas, kuris buvo panaudotas, iš Mygtukai.jsx
    // o čia tėviniam komponente atėjusią info. apdorojam

    // čia finalinis taškas
    // atejusiInfo - ateina tai, ką išsiuntėme - masyvą, objektą ir t.t.
    const apdorotiTekstoPasikeitima = (atejusiInfo) => {
        // console.log(atejusiInfo); // kava, arbata, vanduo
        setTekstas(atejusiInfo)
    }

  return (
    <div>
        <h2>Pasirinkimas</h2>
        {/* įvykis užfiksuotas tėviniam komponente */}
        {/* gauname duomenis atsiųstus iš vaikinio elemento - Mygtukai.jsx */}
        <Mygtukai tekstasPasikeite={apdorotiTekstoPasikeitima} />
        {/* <Mygtukai ontTekstasPasikeite={apdorotiTekstoPasikeitima} /> */}
        {/* Kaip: <button onClick={apdorotiTekstoPasikeitima}></>*/}
        <p>Jūs pasirinkote: {tekstas}</p>
    </div>
  )
}

export default Pasirinkimas

// nelabai praktiškai prasmingas pvz.,
// bet mokymuisi ir supratimui tinka
// dažn., kai daug kodo naudojama
// pvz.: forma su daug laukų