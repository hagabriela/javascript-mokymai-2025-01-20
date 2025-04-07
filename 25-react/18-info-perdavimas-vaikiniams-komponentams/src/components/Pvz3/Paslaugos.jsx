import React from 'react'
import Paslauga from './Paslauga'

const Paslaugos = () => {
  return (
    <div>
        <h2>Paslaugos</h2>
        <Paslauga pavadinimas="Daržo ravėjimas" kategorija="Sodininkystė" />
        <Paslauga pavadinimas="Varžtų tvarkymas" kategorija="Meistravimas" />
        <Paslauga pavadinimas="Karvės melžimas" kategorija="Gyvūlininkystė" />
    </div>
  )
}

export default Paslaugos