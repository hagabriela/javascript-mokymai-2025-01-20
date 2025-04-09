import { useState, useEffect } from "react"
import axios from "axios" // reikia ir susiinstaliuoti prieš tai - npm install axios

const Komp3 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('komp3 užsirovė');

        // vietoj fetch. mažiau then.catch dalis klaidoms
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => console.log(error))
        
        // axios.post - jei įdėti duomenis - lengviau nei per fetch
        // axios.post('https://jsonplaceholder.typicode.com/todos', objektas)
        //     .then(response => {
        //         console.log(response.data);
        //         setData(response.data)
        //     })
        //     .catch(error => console.log(error))
    }, [])

  return (
    <div>
        <h2>Komp3</h2>
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

export default Komp3