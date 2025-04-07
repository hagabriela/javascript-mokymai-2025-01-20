// šis komponentas apjungia visus prekių komponentus
// jis kviečia duomenų papildymo komponentą
// ir duomenų išvedimo komponento
// visa info. suvaikšto per šį komponentą,
// nes paima info. iš naujos prekės suvedimo komponento
// ir tą info. perduoda į prekių išvedimo komponentą

import React from 'react'
import { useState } from 'react'
import PrekeNauja from './PrekeNauja'
import PrekesVisos from './PrekesVisos'

const PrekesWrapper = () => {
  // pasitestavimui galime duoti duomenų pradžioje, bet dabar
    // paliksim tuščią masyvą, kurį supildo vartotojas

    // const TESTDATA = [
    //     { pavadinimas: 'Knyga', kiekis: 1, kaina: 10 },
    //     { pavadinimas: 'Žurnalas', kiekis: 2, kaina: 5 },
    //     { pavadinimas: 'Lego', kiekis: 3, kaina: 20 },
    // ]

    // const [prekes, setPrekes] = useState(TESTDATA)

    // ARBA

    // const [prekes, setPrekes] = useState([
    //     { pavadinimas: 'Knyga', kiekis: 1, kaina: 10 },
    //     { pavadinimas: 'Žurnalas', kiekis: 2, kaina: 5 },
    //     { pavadinimas: 'Lego', kiekis: 3, kaina: 20 },
    // ])

    const [prekes, setPrekes] = useState([])

    // const naujaPrekeHandler = (naujaPreke) => {
    const handlePridejimas = (naujaPreke) => {
      // console.log('iš tėvinio komponento:', naujaPreke);
      // setPrekes([...prekes, naujaPreke])

      // jeigu norim naują prekę pridėti į pradžią
      setPrekes([naujaPreke, ...prekes]) 
    }

  return (
    <div>
        <h2>Prekės</h2>
        {/* šioje vietoje sujungimas įvyksta */}
        <PrekeNauja pridejimas={handlePridejimas} />
        {/* <PrekeNauja onNaujaPreke={handlePridejimas} /> */}
        <PrekesVisos data={prekes} />
    </div>
  )
}

export default PrekesWrapper