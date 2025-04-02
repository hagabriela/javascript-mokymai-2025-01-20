import React from 'react'

const Komp2 = () => {
    const spaudziam = () => {
        alert ('Paspaudžiau')
    }

  return (
    <div>
        <h2>Komp2</h2>
        {/* čia tokiu būdu onClick, nes viršuje yra f-ja */}
        <button onClick={ spaudziam }>
            Spausti čia
        </button>
    </div>
  )
}

export default Komp2