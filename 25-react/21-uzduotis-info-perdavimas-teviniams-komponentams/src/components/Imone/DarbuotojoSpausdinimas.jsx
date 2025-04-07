import React from 'react'

const DarbuotojoSpausdinimas = (props) => {
  return (
    <div>
        <h3>Suvesti darbuotojai</h3>
        {
            props.data.length > 0 &&
                props.data.map((darbuotojas, index) => {
                        return (
                            <div key={index}>
                                <h4>{darbuotojas.vardas} {darbuotojas.pavarde}</h4>
                                <p>Pareigos {darbuotojas.pareigos}</p>
                                <p>Atlyginimas {darbuotojas.atlyginimas} &euro;</p>
                            </div>
                        )
                    })
        }
        {
            props.data.length === 0 &&
            <p>Šiuo metu nėra įvestų darbuotojų.</p>
        }
    </div>
  )
}

export default DarbuotojoSpausdinimas