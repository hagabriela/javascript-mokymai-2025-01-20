import React from 'react'

const PrekiuKrepselis = () => {
    let prekes = [
        { id: 1, pavadinimas: 'Tušinukas', kaina: 2.5, kiekis: 2, nuolaida: 0.50 },
        { id: 2, pavadinimas: 'Flomasteriai', kaina: 3, kiekis: 10, nuolaida: 0.20 },
        { id: 3, pavadinimas: 'Sąsiuvinys', kaina: 1.2, kiekis: 3, nuolaida: 0.10 },
        { id: 4, pavadinimas: 'Obuoliai', kaina: 2.2, kiekis: 2, nuolaida: 0.95 },
        { id: 5, pavadinimas: 'Kriaušės', kaina: 2.1, kiekis: 1, nuolaida: 1.05 },
    ]

    const atrinktiPrekesPagalKaina = (kainosRiba) => {
        return prekes.filter(preke => preke.kaina > kainosRiba);
    };

    const atvaizduotiPrekes = (prekiuMasyvas) => {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>Pavadinimas</th>
                        <th>Kaina (€)</th>
                        <th>Kiekis</th>
                        <th>Nuolaida (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {prekiuMasyvas.map((preke) => (
                        <tr key={preke.id}>
                            <td>{preke.pavadinimas}</td>
                            <td>{preke.kaina}</td>
                            <td>{preke.kiekis}</td>
                            <td>{preke.nuolaida}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const prekiuNuolaida = () => {
        let suma = 0
        for (const preke of prekes) {
            suma += preke.nuolaida
        }
        return suma
    }

    // const bendraKrepselioKaina = () => {
    //     return prekes.reduce((suma, preke) => {
    //         let galutineKaina = (preke.kaina - preke.nuolaida) * preke.kiekis;
    //         return suma + galutineKaina;
    //     }, 0).toFixed(2);
    // };

    const bendraKrepselioKaina = () => {
        let suma = 0;
        for (const preke of prekes) {
            let galutineKaina = (preke.kaina - preke.nuolaida) * preke.kiekis;
            suma += galutineKaina;
        }
        return suma.toFixed(2)
    };

    const atrinktosPrekes = atrinktiPrekesPagalKaina(2);

  return (
    <div>
        <h2>Prekių Krepšelis</h2>
        <h3>Visos prekes</h3>
        {atvaizduotiPrekes(prekes)} {/* Atvaizduoja visas prekes */}
        <p>Bendra prekių nuolaida: {prekiuNuolaida()} eur.</p>
        <p>Bendra krepšelio kaina (su nuolaida): {bendraKrepselioKaina()} eur.</p>
        <h3>Prekės, kurių kaina viršija 2 eurus</h3>
        {atvaizduotiPrekes(atrinktosPrekes)}  {/* Atvaizduoja tik atrinktas prekes */}
    </div>
  )
}

export default PrekiuKrepselis