import React from 'react'

const Pazymys = (props) => {

    const teigiamasNeigiamas = () => {
        if (props.paz >= 5) {
            return 'teigiamas'
        } else {
            return 'neigiamas'
        }
    }

  return (
    <div>
        <p>Studento pažymiai: {props.paz}</p>
        <p>{ teigiamasNeigiamas() }</p>
    </div>
  )
}

export default Pazymys