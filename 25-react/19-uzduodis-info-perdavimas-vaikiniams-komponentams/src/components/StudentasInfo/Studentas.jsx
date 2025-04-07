import React from 'react'
import Pazymys from './Pazymys'

const Studentas = () => {
    let studentas = {
        vardas: 'Tomas',
        pavarde: 'Tomaitis',
        mokykla: 'VU',
        programa: 'Farmacija' 
    }

    let pazymiai = [10, 9, 8, 9, 10, 10]

  return (
    <div>
        <h2>{studentas.vardas} {studentas.pavarde}</h2>
        <p>Mokosi {studentas.mokykla} {studentas.programa}</p>
        <div>
            {
                pazymiai.map((pazymys, i) => (
                    <Pazymys key={i} paz={pazymys} />
                ))
            }
        </div>
        {/* <div>
            {
                pazymiai.map((pazymys, i) => {
                    return <Pazymys key={i} paz={pazymys} />
                })
            }
        </div> */}
    </div>
  )
}

export default Studentas