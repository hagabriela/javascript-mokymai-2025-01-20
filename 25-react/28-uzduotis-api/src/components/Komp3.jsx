import { useState, useEffect } from "react"

const Komp3 = () => {
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])
    
  return (
    <>
      <h2>Komp3</h2>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {
        items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })
      }
    </>
  )
}

export default Komp3