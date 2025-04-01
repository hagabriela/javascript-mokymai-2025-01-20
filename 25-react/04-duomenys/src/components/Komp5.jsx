const Komp5 = () => {
    let title = 'Medžiai mūsų soduose'
    let medziai = ['Uosis', 'Beržas', 'Pušis', 'Kedras' , 'Eglė', 'Klevas', 'Šermukšnis']

  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {medziai.map((medis, i) => <li key={i}>{medis}</li>)}
        </ul>
        <ul>
            {medziai.map((medis, indeksas) => <li key={indeksas}>{medis}</li>)}
        </ul>
        <ul>
            {medziai.map(medis => <li key={medis}>{medis}</li>)}
        </ul>
        <ul>
            {medziai.map(medis => <li key={medis}><strong>Medis:</strong> {medis}</li>)}
        </ul>

    </div>
  )
}

export default Komp5

// function isvedimas() {
//    let duomenys = ['pirmas', 'antras', 'trecias']
//    return `<ul>
//        ${ duomenys.map(x => '<li>' + x + '</li>').join(' ') }
//    </ul>`
// }

// key ant aukščiausio elemento - li
// map prasuka ciklą, nes paprastas for of ciklas
// čia nesuveiktų