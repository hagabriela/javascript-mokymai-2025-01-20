import { useState, useEffect } from "react"

const Komp2 = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('all')

    // veiks užsikrovus komponentus
    useEffect(() => {
        console.log('kom2 užsikrovė');

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })

        //  kad pridėti kažką - lengviau su "axios"
        // fetch('https://jsonplaceholder.typicode.com/todos', {
        //      method: 'post'
        //      ...
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //         setData(json)
        //     })
        
    }, [])

    // veiks pasikeitus filter reikšmei
    useEffect(() => {
        console.log('filter pakeistas', filter);

        let newUrl = 'https://jsonplaceholder.typicode.com/todos'
        switch (filter) {
            case 'completed' : newUrl += '?completed=true'; break
            // 'https://jsonplaceholder.typicode.com/todos?completed=true'
            case 'not-completed' : newUrl += '?completed=false'; break
            // 'https://jsonplaceholder.typicode.com/todos?completed=false'
        }

        fetch(newUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
        
        // if (filter == 'all') {
        //     fetch('https://jsonplaceholder.typicode.com/todos')
        //         .then(response => response.json())
        //         .then(todos => {
        //             setData(todos)
        //         })
        // } else if (filter == 'completed') {
        //     fetch('https://jsonplaceholder.typicode.com/todos?completed=true')
            //     .then(response => response.json())
            //     .then(todos => {
            //         setData(todos)
            //     })
        // }

    }, [filter])

    // kitas būdas - onClick savo f-ja

  return (
    <div>
        <h2>Komp2</h2>
        {/* kiekviena momentu, kai spaudžiam mygtuką kreipiasi į backendą */}
        <button onClick={() => setFilter('all')}>Rodyti viską</button>
        <button onClick={() => setFilter('completed')}>Rodyti tik atliktas</button>
        <button onClick={() => setFilter('not-completed')}>Rodyti tik neatliktas</button>
        <p>Rezultatų: { data ? data.length : 'kol kas neužkrovė'} </p>
        {
            data.map((item, i) => {
                return <div key={i} style={{border: '1px solid black'}}>
                    <h3>{item.title}</h3>
                    <p>{item.completed ? 'Atlikta' : 'Neatlikta'}</p>
                </div>
            })
        }
    </div>
  )
}

export default Komp2