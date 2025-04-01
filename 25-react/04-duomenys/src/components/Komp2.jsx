const Komp2 = () => {
    let pazymiai = [10, 8, 7, 6, 4, 8, 9]

  return (
    <div>
        <h2>Komp2</h2>
        <p>Pažymiai: {pazymiai}</p>
        <p>Pažymiai: {pazymiai.join(', ')}</p>
        <p>Pažymiai: { pazymiai.join(', ') }</p>
        <p>Pirmas: { pazymiai[0] }</p>
        <p>Trečias: { pazymiai[2] }</p>
        <p>Paskutinis: { pazymiai[pazymiai.length - 1] }</p>
        <p>Kiek: { pazymiai.length }</p>


    </div>
  )
}

export default Komp2