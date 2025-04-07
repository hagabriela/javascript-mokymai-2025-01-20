import './Ketvirtas.css';
import { useState } from 'react';

const Ketvirtas = () => {
    // let skaicius = 3
    const [skaicius, setSkaicius] = useState(3)

    const dinamineKlase = () => {
        if (skaicius % 2 == 0) {
            return 'pritaikyta-raudona'
        } else {
            return 'pritaikyta-melyna'
        }
    }

    // du būdai

  return (
    <div>
        <button onClick={() => setSkaicius(skaicius + 1)}>Didinti</button>
        <p className={skaicius % 2 == 0 ? 'pritaikyta-raudona' : 'pritaikyta-melyna'}>{skaicius}</p>
        <p className={dinamineKlase()}>{skaicius}</p>
    </div>
  )
}

export default Ketvirtas