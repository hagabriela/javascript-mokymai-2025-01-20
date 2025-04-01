// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
    let kursai = [
        {
            id: 1,
            pavadinimas: 'Ilgieji JavaScript',
            trukme: 3,
            kaina: 3950

        },
        {
            id: 2,
            pavadinimas: 'Duomenų analitika',
            trukme: 1.5,
            kaina: 2593
        },
        {
            id: 3,
            pavadinimas: 'IT sistemų saugumo pagrindai',
            trukme: 2.5,
            kaina: 2400
        },
    ];
    return (
        <div>
            <h1>Kursai</h1>
            <div className="kursai">
            {
                    kursai.length > 0 ?
                        kursai.map(kursas => {
                           return ( 
                                <div className="kurso-blokas" key={kursas.id}>
                                    <h3>{kursas.pavadinimas}</h3>
                                    <p>Kurso trukmė: {kursas.trukme} mėn.</p>
                                    <p>Kurso kaina: {kursas.kaina} eur</p>
                                </div>
                            )
                        })
                        : <p>Kursų nėra.</p>
                }
            </div>
        </div>
    )
}

export default Komp9
