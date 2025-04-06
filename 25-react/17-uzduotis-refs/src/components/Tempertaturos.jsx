import React from 'react'
import { useState, useRef } from 'react'

const Tempertaturos = () => {
    const [temperaturos, setTemperaturos] = useState([])
    
    const temperaturosRef = useRef()

    const onSubmitHandler = (event) => {
        event.preventDefault()

        let naujaTemperatura = temperaturosRef.current.valueAsNumber;
       
       setTemperaturos([...temperaturos, naujaTemperatura])
       
       temperaturosRef.current.value = ''
    }

    const vidutine = () => {
        return (temperaturos.reduce((a, b) =>  a + b, 0) / temperaturos.length).toFixed(2)
    }

    const temperaturuSk = () => {
        if (temperaturos.length === 0) {
            return 'Yra 0 įvestos informacijos.'
        } else {
            return `Yra ${temperaturos.length} temperatūrų.`
        }
    }

    const zemiausiaTemperatura = () => {
        let min = temperaturos[0]
        for (const temp of temperaturos) {
            if (temp < min) {
                min = temp
            }
        }
        return min
    }

    const auksciausiaTemperatura = () => {
        let max = temperaturos[0]
        for (const temp of temperaturos) {
            if (temp > max) {
                max = temp
            }
        }
        return max
    }

    const skirtumasZemIrAuks = () => {
        return auksciausiaTemperatura() - zemiausiaTemperatura()
    }

    const onIsvalytiClickHandler = () => {
        setTemperaturos([])
    }

  return (
    <div>
        <h2>Temperatūros</h2>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="temperaturos">Įveskite temperatūrą:</label>
            <input type="number" id='temperaturos' ref={temperaturosRef} />
            <button type='submit'>Įvesti</button>
        </form>
        {
            temperaturos.length > 0 &&
            <div>
                <p>Temperatūros: { temperaturos.join(', ') }</p>
            </div>
        }
        {
            temperaturos.length > 0 &&
            <div>
                <p>Vidutinė dienos temperatūra: { vidutine() }</p>
            </div>
        }
        
        <div>
            <p>{ temperaturuSk() }</p>
        </div>
        
        {
            temperaturos.length > 0 &&
            <div>
                <p>Žemiausia temperatūra: { zemiausiaTemperatura() }</p>
            </div>
        }
        {
            temperaturos.length > 0 &&
            <div>
                <p>Aukščiausia temperatūra: { auksciausiaTemperatura() }</p>
            </div>
        }
        {
            temperaturos.length > 0 &&
            <div>
                <p>Skirtumas tarp aukščiausios ir žemiausios temperatūros: { skirtumasZemIrAuks() }</p>
            </div>
        }
        {
            temperaturos.length > 0 && <button onClick={onIsvalytiClickHandler}>Išvalyti</button>
        }
    </div>
  )
}

export default Tempertaturos