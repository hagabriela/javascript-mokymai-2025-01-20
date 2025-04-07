import React, { useState } from 'react'
import CounterMygtukai from './CounterMygtukai'

const CounterTev = () => {
    const [skaicius, setSkaicius] = useState(0)

    const onGautosInfoHandler = (gautaInfo) => {
        setSkaicius((skaicius) => skaicius + gautaInfo)
    }

  return (
    <div>
        <h2>Counter</h2>
        <CounterMygtukai issiuntimas={onGautosInfoHandler} />
        <p>Jūs pasirinkote: {skaicius}</p>
    </div>
  )
}

export default CounterTev