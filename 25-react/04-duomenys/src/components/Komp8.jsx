const Komp8 = () => {
    let prekes = [
        { id: 1, pavadinimas: 'Tušinukas', kaina: 2.5, kiekis: 283 },
        { id: 2, pavadinimas: 'Flomasteriai', kaina: 3, kiekis: 103 },
        { id: 3, pavadinimas: 'Sąsiuvinys', kaina: 1.2, kiekis: 401 },
        { id: 4, pavadinimas: 'Obuoliai', kaina: 2.2, kiekis: 231 },
        { id: 5, pavadinimas: 'Kriaušės', kaina: 2.1, kiekis: 74 },
    ]
  return (
    <div className="prekiu-wrapper">
        <h2>Prekės</h2>
        <div className="prekiu-list">
            {
                prekes.length > 0 ?
                    prekes.map(preke => {
                       return ( 
                            <div className="prekes-blokas" key={preke.id}>
                                <h3>{preke.pavadinimas}</h3>
                                <p>Prekė kainuoja: {preke.kaina} eur</p>
                                <p>Jos turime: {preke.kiekis} vnt.</p>
                                 {/* sąlyga if viduje dar viena */}
                                 {/* klausimas && jeigu taip */}
                                 { preke.kiekis == 0 && <p>Prekės nebėra!</p> }
                                 { preke.kiekis == 0 ? <p>Prekės nebėra!</p> : '' }
                            </div>
                        )
                    })
                    : <p>Prekių nėra.</p>
            }
        </div>
    </div>
  )
}

export default Komp8