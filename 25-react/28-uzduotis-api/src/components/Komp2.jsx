import { useState, useEffect } from "react"

const Komp2 = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('all')

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [])

    useEffect(() => {

        let newUrl = 'https://jsonplaceholder.typicode.com/photos'
        switch (filter) {
            case 'one' : newUrl += '?albumId=1'; break
            case 'two' : newUrl += '?albumId=2'; break
        }


        fetch(newUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
        
    }, [filter])

  return (
    <div>
        <h2>Komp2</h2>
        <button onClick={() => setFilter('all')}>Rodyti viską</button>
        <button onClick={() => setFilter('one')}>Rodyti tik 1 ID</button>
        <button onClick={() => setFilter('two')}>Rodyti tik 2 ID</button>
        <p>Rezultatų: { data ? data.length : 'kol kas neužkrovė'} </p>
        {
            data.map((item, i) => {
                return <div key={i} style={{border: '1px solid black'}}>
                    <h3>{item.title}</h3>
                    <p>ID: {item.albumId}</p>
                    <p>url: {item.url}</p>
                </div>
            })
        }
    </div>
  )
}

export default Komp2