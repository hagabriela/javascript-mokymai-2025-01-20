import React from 'react'

const Darbuotojas = () => {
    let darbuotojas = {
        vardas: 'Tomas',
        profesija: 'IT',
        atlyginimas: 3500,
        etatas: 1,
        stazas: 7
    }

    const uzdirbes = () => {
        return darbuotojas.atlyginimas * 12 * darbuotojas.etatas
    }

    const ilgametisDarbuotojas = () => {
        if (darbuotojas.stazas >= 5) {
            return 'ilgametis'
        } else {
            return 'naujokas'
        }
    }

    const patikrintiAtlyginima = (kriterijus) => {
        if (darbuotojas.atlyginimas >= kriterijus) {
            return `Uždirba daugiau arba tiek pat kiek ${kriterijus} eur.`;
        } else {
            return `Uždirba mažiau nei ${kriterijus} eur.`;
        }
    };

  return (
    <div>
        <h2>{darbuotojas.vardas}</h2>
        <p>Dirba {darbuotojas.profesija}</p>
        <p>Jo atlyginimas "į rankas": {darbuotojas.atlyginimas} eur / mėn.</p>
        <p>Dirba {darbuotojas.etatas} etatu</p>
        <p>Darbo stažas {darbuotojas.stazas} metai</p>
        <p>Per metus yra uždirbęs {uzdirbes()} eurų</p>
        <p>Darbuotojas yra {ilgametisDarbuotojas()}</p>
        <p>{patikrintiAtlyginima(5000)}</p> 
    </div>
  )
}

export default Darbuotojas