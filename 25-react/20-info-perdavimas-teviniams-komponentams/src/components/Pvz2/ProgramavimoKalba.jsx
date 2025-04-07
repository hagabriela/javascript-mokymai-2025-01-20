import React from 'react'

const ProgramavimoKalba = (props) => {
    const rinktisHandler = (event) => {
        // console.log('mygtuko tekstas:', event.target.textContent);
        
        // čia yra išsiunčiama info. į komponentą, kuris iškvietė šį komponentą
        // tėvinis komponentas pasiims šią info. ir ją apdoros,
        // pasiims per argumentą "issiuntimas"

        // event ir duoda mygtuko tekstą
        props.issiuntimas(event.target.textContent)
    }

  return (
    <div>
        <button onClick={rinktisHandler}>JavaScript</button>
        <button onClick={rinktisHandler}>C#</button>
        <button onClick={rinktisHandler}>PHP</button>
    </div>
  )
}

export default ProgramavimoKalba