import React from 'react'

const CounterMygtukai = (props) => {
    const spaustiMygtukaHandler = (prideti) => {
        props.issiuntimas(prideti)
    }

  return (
    <div>
        <button onClick={() => spaustiMygtukaHandler(1)}>Pridėti 1</button>
        <button onClick={() => spaustiMygtukaHandler(2)}>Pridėti 2</button>
        <button onClick={() => spaustiMygtukaHandler(5)}>Pridėti 5</button>
    </div>
  )
}

export default CounterMygtukai