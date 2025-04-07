import React from 'react'

// const Automobilis = ({ gamintojas, modelis }) => {
const Automobilis = (props) => {
    // console.log(props);
    // let auto = props.auto

    // let gamintojas = props.auto.gamintojas
    // let modelis = props.auto.modelis

    // kadangi kintamasis -  gamintojas ir raktas - gamintojas sutampa, todėl
    // galima šį variantą
    let { gamintojas, modelis } = props.auto

    
  return (
    <div>
        <h3>{gamintojas} {modelis}</h3>
    </div>
  )
}

export default Automobilis