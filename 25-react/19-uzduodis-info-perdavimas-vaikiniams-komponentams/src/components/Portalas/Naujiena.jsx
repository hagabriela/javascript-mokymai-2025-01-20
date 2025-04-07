import React from 'react'

const Naujiena = ({ nauj }) => {

    const patikrinimas = () => {
        if (nauj.perziuros >= 1000) {
            return 'HOT'
        } else {
            return ''
        }
    } 
    
  return (
    <div>
        <h3>{nauj.pavadinimas}</h3>
        <p>Peržiūrų sk. {nauj.perziuros}</p>
        <p>{nauj.tekstas}</p>
        <p>{ patikrinimas() }</p>
    </div>
  )
}

export default Naujiena