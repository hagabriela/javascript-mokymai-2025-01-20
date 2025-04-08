import { useState, useEffect } from "react"

const Komp1 = () => {
    const [count, setCount] = useState(0)

    // useEffect(funkcija_kaDarom, [kaSeka])

    // useEffect stebi komponento užsikorvimą / kintamuosius (jų pokytį)

    // vykdomas tada, kai komponentas užsikrauna,
    // gerai, norint pritaikyti pirmus veiksmus, kurie turėtų būti
    // atlikti, kai komponentas užsikrauna,
    // pvz.: išsitraukti duomenų iš serverio
    useEffect(() => {
        console.log('komponentas užsikrovė');
    }, []) // jei masyvas tuščias, tai vykdoma tik vieną kartą
    // nes šituose [] skliaustuose mes nurodome, kad šis useEffect
    // vykdomas tada, kai pasikeičia skliaustuose nurodyta info.,
    // o jei skliaustai tušti - tuomet tiesiog, kai komponentas užsikrauna useEffect suveiktų



    // šį useEffect vykdo, kai pasikeičia count reikšmė
    // šis useEffect geras, kai norite atlikti papildmų veiksmų po count pasikeitimo

    // automatiškai vykdys kodą
    // nebūtina šioje vietoje naudoti būtent useEffect

    // 3 veiksmas
    useEffect(() => {
        console.log('pasikeitė count reikšmė', count);
        if (count > 5) {
            alert ('viršijote 5')
            setCount(0)
        }
    }, [count])

    // 2 veiksmas
    const handleClick = () => {
        setCount(count + 1)
    }

  return (
    <div>
        <h2>Komp1</h2>
        <button onClick={handleClick}>Click</button> {/* 1 veiksmas */}
        <p>{count}</p>
    </div>
  )
}

export default Komp1