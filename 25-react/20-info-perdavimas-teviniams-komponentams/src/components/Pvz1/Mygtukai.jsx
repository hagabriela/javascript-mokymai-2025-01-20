import React from 'react'

const Mygtukai = (props) => {
    const kavaHandler = () => {
        // alert('Jūsų pasirinkimas: kava')
        props.tekstasPasikeite('kava')
        // props.issiustiDuomenis('kava')
        // props.onPasirinkimas('kava')
    }

    const arbataHandler = () => {
        // alert('Jūsų pasirinkimas: arbata')
        props.tekstasPasikeite('arbata')
    }

    const vanduoHandler = () => {
        // alert('Jūsų pasirinkimas: vanduo')
        props.tekstasPasikeite('vanduo')
    }

    // galima ir per 1 Handler ir su event - tekstas iš mygtuko

  return (
    <div>
        <button onClick={kavaHandler}>Kava</button>
        <button onClick={arbataHandler}>Arbata</button>
        <button onClick={vanduoHandler}>Vanduo</button>
    </div>
  )
}

export default Mygtukai

// props - gauna ir išsiunčia duomenis