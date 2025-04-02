import React from 'react'

const EinaPrieLentos = () => {
    let vardai = ['Tomas', 'Vytautas', 'Simona', 'Ausma']

    const atsitiktinis = () => {
        // Pasirenkame atsitiktinį indeksą masyve
        const atsitiktinisIndex = Math.floor(Math.random() * vardai.length);
        // Parodome pasirinkto studento vardą su alert
        alert(`${vardai[atsitiktinisIndex]} eina prie lentos!`);
    }
    
  return (
    <div>
        <h2>Eina prie lentos</h2>
        <button onClick={atsitiktinis}>Eina prie lentos</button>
    </div>
  )
}

export default EinaPrieLentos