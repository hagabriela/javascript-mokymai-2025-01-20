import React from 'react'
import Role from './Role'

const VisosRoles = () => {
  return (
    <div>
        <h2>Visos rolės</h2>
        <Role pavadinimas="admin" kiekis={1} />
        <Role pavadinimas="manager" kiekis={175} />
        <Role pavadinimas="viewer" kiekis={500} />
    </div>
  )
}

export default VisosRoles