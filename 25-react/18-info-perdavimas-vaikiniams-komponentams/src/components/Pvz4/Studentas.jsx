import React from 'react'

// const Studentas = ({ studentas }) => {
const Studentas = (props) => {
    // console.log(props);
    
  return (
    <div>
        {/* raktas - studentas ir raktas - vardas, pavarde, amzius */}
        {/* visas kelias iki pvz.: amziaus */}
        <h3>{props.studentas.vardas} {props.studentas.pavarde}</h3>
        <p>Yra {props.studentas.amzius} m. amžiaus</p>

        {/* <p>Yra {props.data.amzius} m. amžiaus</p> */}
        
        {/* <h3>{studentas.vardas} {studentas.pavarde}</h3> */}
        {/* <p>Yra {studentas.amzius} m. amžiaus</p> */}
    </div>
  )
}

export default Studentas