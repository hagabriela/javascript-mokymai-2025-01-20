import React from 'react'

const Salis = (props) => {
  const patikrinimas = () => {
    if (props.zemynas == 'Europa') {
      return 'Jėga'
    } 
  }

  return (
    <div>
      <p>{ props.pavadinimas } priklauso { props.zemynas } žemynui</p>
      <p> { patikrinimas() }</p>
    </div>
  )
}

export default Salis