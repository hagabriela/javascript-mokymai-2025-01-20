import React from 'react'

const Palindromas = () => {
    const palindromasHandler = (event) => {
        let tekstas = event.target.value

        // Pašaliname nereikalingus tarpus ir paverčiame į mažąsias raides (nepriklauso nuo didžiųjų rašmenų)
        let sutvarkytasTekstas = tekstas.replace(/\s+/g, '').toLowerCase();

        // Apverčiame tekstą ir tikriname ar jis yra lygus pradiniam tekstui
        // split('').reverse().join(''):
        // split(''): suskaldome tekstą į masyvą, kuriame kiekvienas simbolis yra atskira reikšmė.
        // reverse(): apverčiame masyvą.
        // join(''): sujungiame apverstą masyvą atgal į tekstą.
        let apverstasTekstas = sutvarkytasTekstas.split('').reverse().join('');
 
        if (sutvarkytasTekstas === apverstasTekstas) {
             console.log(`${tekstas} yra palindromas`);
        } else {
             console.log(`${tekstas} nėra palindromas`);
        }
    }

  return (
    <div>
        <h2>Palindromas</h2>
        <input type="text" onInput={palindromasHandler}/>
    </div>
  )
}

export default Palindromas