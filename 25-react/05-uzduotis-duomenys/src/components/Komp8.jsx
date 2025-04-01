// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
    let salys = [
        {
            id: 1,
            pavadinimas: 'Lietuva',
            sostine: 'Vilnius',
            gyventojuSkaicius: 2806000

        },
        {
            id: 2,
            pavadinimas: 'Latvija',
            sostine: 'Riga',
            gyventojuSkaicius: 1907675
        },
        {
            id: 3,
            pavadinimas: 'Estija',
            sostine: 'Talinas',
            gyventojuSkaicius: 1374687
        },
    ];
    return (
        <div>
            <h1>Šalys</h1>
            <div className="salys">
                {
                    salys.map(salis => {
                        return (
                            <div className="salies-blokas" key={salis.id}>
                                <h3>{salis.pavadinimas}</h3>
                                <p><strong>Šalies sostinė:</strong> {salis.sostine}</p>
                                <p><strong>Šalies gyventojų skaičius:</strong> {salis.gyventojuSkaicius}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Komp8
