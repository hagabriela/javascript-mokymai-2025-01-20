import { useState, useEffect } from "react"

const Komp1 = () => {
    const [data, setData] = useState([])
    // const [todos, setTodos] = useState([])

    // veiks užsikrovus komponentui
    useEffect(() => {
        console.log('kom1 užsikrovė');

        // neidėjus į useEffect irgi veiktų
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
            // .then(todos => {
            //     console.log(todos)
            //     setData(todos)
            // })
             // .then(data => {
            //     console.log(data)
            //     setTodos(data)
            // })
    }, [])

  return (
    <div>
        <h2>Komp1</h2>
        {
            data.map((item, i) => {
                return <div key={i} style={{border: '1px solid black'}}>
                    <h3>{item.title}</h3>
                    <p>{item.completed ? 'Atlikta' : 'Neatlikta'}</p>
                </div>
            })
            // key={item.id}
            // key={todo.id}
        }
    </div>
  )
}

export default Komp1