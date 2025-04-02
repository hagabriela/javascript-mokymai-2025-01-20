import React from 'react'

const GeriausiasMedis = () => {
    const medis = (pavadinimas) => {
        if (pavadinimas == 'uosis' ) {
            alert('oho koks rimtas')
        } else if (pavadinimas == 'ąžuolas') {
            alert('labai mielas raštas')
        } else if (pavadinimas == 'klevas') {
            alert('rudeniškas esi')
        }
    }

  return (
    <div>
        <h2>Geriausias medis</h2>
        <button onClick={ () => medis('uosis') }>Uosis</button>
        <button onClick={ () => medis('ąžuolas') }>Ąžuolas</button>
        <button onClick={ () => medis('klevas') }>Klevas</button>
    </div>
  )
}

export default GeriausiasMedis