import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const TravelDetailPage = () => {
    // id - nes taip aprašėme App.jsx
    const { id } = useParams()
    // console.log(id);

    const navigate = useNavigate()

    const [travel, setTravel] = useState({})

    // kreiptis į backendą, kad gauti info.
    useEffect(() => {
        fetch('http://localhost:3000/travels/' + id)
            .then(res => res.json())
            // then, kuris jau gavo duomenis
            .then(data => {
                // console.log(data);
                setTravel(data)
            })
    }, [])

    const deleteHandler = () => {
        if (confirm(`Ar tikrai norite trinti "${travel.title}"?`)) {
            // console.log('triname');  
            fetch('http://localhost:3000/travels/' + travel._id, { method: 'DELETE' })
                .then(res => res.json())
                .then(() => navigate('/'))
        }
    }
    
    return (
        <div>
            {/* ? - jei yra toks raktas title - tada atvaizduojamas */}
            <h1>Kelionė: {travel?.title}</h1>
            <p>{travel?.description}</p>
            <p><strong>Metai:</strong> {travel?.year} m.</p>
            <p><strong>Kiek naktų:</strong> {travel?.nights}</p>
            <p><strong>Kaina:</strong> {travel?.price} &euro;</p>
            <p>
                <Link to={"/atnaujinti/" + travel?._id} className="btn">Atnaujinti</Link>
                <button onClick={deleteHandler} className='btn btn-red'>Trinti</button>
            </p>
        </div>
    )
}

export default TravelDetailPage