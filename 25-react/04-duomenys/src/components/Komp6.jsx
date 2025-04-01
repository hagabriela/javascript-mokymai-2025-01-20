const Komp6 = () => {
    let sk1 = [10, 8, 7, 6, 8, 7]
    let sk2 = []

     // inline if arba ternary operator
     // { klausimas ? taip : ne }
     // { sąlyga ? teisinga : neteisinga }

  return (
    <div>
        <h2>Skaičiai su if sąlyga</h2>
        <h3>Skaičiai 1</h3>
        {
            sk1.length > 0 ?
            <ul>
                {sk1.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
            </ul>
            :
            <p>Skaičių 1 nėra</p>
        }
        <h3>Skaičiai 2</h3>
        {
            sk2.length > 0 ?
            <ul>
                {sk2.map((skaicius, i) => <li key={i}>{skaicius}</li>)}
            </ul>
            :
            <p>Skaičių 2 nėra</p>
        }
    </div>
  )
}

export default Komp6

// function spausdinimas() {
//      let skaiciai = [7, 4, 5]
// 
//      return `${skaiciai.length > 0 ? 'spausdinam masyva' : 'duomenų nėra' }`
// }