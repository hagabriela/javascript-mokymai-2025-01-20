import React from 'react'

const Komp1 = () => {
  return (
    <div>
        <h2>Komp1</h2>
        {/* padaroma inline f-ja vietoj tiesiog onClick, kad reaguotų būtent į paspaudimą, o ne šiaip alert išlystų */}
        <button onClick={ () => alert('labas') }>
            Spausti čia
        </button>
    </div>
  )
}

export default Komp1