import React from 'react'

const Tikrinimai = () => {
    let sk = 15

    const arLyginis = () => {
        if (sk % 2 == 0) {
            alert('lyginis')
        } else {
            alert ('nelyginis')
        }
    }

    const didesnisNei30 = () => {
        if (sk > 30) {
            alert('didesnis nei 30')
        } else {
            alert ('mažesnis arba lygus 30')
        }
    }

    const pirminis = () => {
        if (sk < 2) {
            alert('ne pirminis')
            return;
        }
        for (let i = 2; i <= Math.sqrt(sk); i++) {
            if (sk % i === 0) {
                alert('ne pirminis')
                return;
            }
        }
        alert('pirminis')
    }

    // const pirminis = () => {
    //     if (sk < 2) {
    //         alert('ne pirminis')
    //         return;
    //     }
    //     for (let i = 2; i < sk; i++) {
    //         if (sk % i === 0) {
    //             alert('ne pirminis')
    //             return;
    //         }
    //     }
    //     alert('pirminis')
    // }

  return (
    <div>
        <h2>Tikrinimai</h2>
        <button onClick={arLyginis}>Ar lyginis?</button>
        <button onClick={didesnisNei30}>Ar didesnis nei 30?</button>
        <button onClick={pirminis}>Ar pirminis?</button>
    </div>
  )
}

export default Tikrinimai