import React from 'react'

const KnyguSpausdinimas = (props) => {
    let knygos = props.data
  return (
    <div>
        <h3>Suvestos knygos</h3>
        {
            knygos.length > 0 &&
                    knygos.map((knyga, index) => {
                        return (
                            <div key={index}>
                                <h4>{knyga.pavadinimas}</h4>
                                <p>Kainuoja {knyga.kaina} &euro;</p>
                                <p>Jos išleidimo metai {knyga.metai}</p>
                            </div>
                        )
                    })
        }
        {
            knygos.length === 0 &&
            <p>Šiuo metu nėra įvestų knygų.</p>
        }
    </div>
  )
}

export default KnyguSpausdinimas