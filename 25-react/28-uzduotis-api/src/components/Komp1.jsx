import { useState, useEffect } from "react"

const Komp1 = () => {
    const [data, setData] = useState([])

   
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [])

  return (
    <div>
        <h2>Komp1</h2>
        {
            data.map((item, i) => {
                return <div key={i} style={{border: '1px solid black'}}>
                    <h3>{item.name}</h3>
                    <p>email: {item.email}</p>
                    <p>address: {item.address.street} {item.address.suite}</p>
                    <p>telephone No. {item.phone}</p>
                </div>
            })
        }
    </div>
  )
}

export default Komp1