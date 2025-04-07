const Trecias = () => {
    let stiliai = {
        backgroundColor: 'red',
        color: 'white'
    }
    
  return (
    <>
    {/* būtinai du {{ }}, jeigu rašome stilių iškart elemente */}
    {/* ne taip patogu, nes neišlenda pagalba */}
    <div style={{backgroundColor: 'lightcoral', color: 'white'}}>Trecias</div>
    <div style={stiliai}>Trecias</div>
    </>
  )
}

export default Trecias