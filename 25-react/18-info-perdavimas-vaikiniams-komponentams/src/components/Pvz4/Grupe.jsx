import React from 'react'
import Studentas from './Studentas'

const Grupe = () => {
    let student = {
        vardas: 'Jonas',
        pavarde: 'Jonaitis',
        amzius: 25
    }

  return (
    <div>
        <h2>Grupė</h2>
        <Studentas studentas={student} />
        {/* <StudentBox data={student} /> Kad nebūtų studentas ir studentas - sviestas sviestuotas */}
    </div>
  )
}

export default Grupe