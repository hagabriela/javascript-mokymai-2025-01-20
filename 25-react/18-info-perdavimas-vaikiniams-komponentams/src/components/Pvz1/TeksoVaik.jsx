import React from 'react'
// import PropTypes from 'prop-types';

const TeksoVaik = (props) => {
    // console.log(props);
    // props - objektas (raktas (tekstas) ir reikšmė (Pirma eilutė ir t.t.), 
    // jei būtų pvz.: dar sk. tai ir jis būtų)

    const patikrinimas = () => {
        if (props.tekstas
            && props.tekstas.split('').filter(r => r == 'a').length > 0) {
                return 'Tekste yra "a" raidžių'
            } else {
                return 'Tekste nėra "a" raidžių'
            }
    }
    
  return (
    <div>
        <p>Gautas tekstas: { props.tekstas }</p>
        {/* ?  įvertins, kad iš props imtų tekstą, tik jeigu jis yra, 
        ir iš teksto jo ilgį, tik jeigu tekstas yra */}
        <p>Teksto ilgis: { props?.tekstas?.length }</p>
        <p>{ patikrinimas() }</p>
    </div>
  )
}

// Validacijai - kad nebraukaliotų
// TekstoVaik.propTypes = {
//     tekstas: PropTypes.string,
// }

export default TeksoVaik


