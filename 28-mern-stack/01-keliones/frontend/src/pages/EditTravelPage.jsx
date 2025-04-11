import styles from "./NewTravelPage.module.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const EditTravelPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [travel, setTravel] = useState({})
    
    useEffect(() => {
        fetch('http://localhost:3000/travels/' + id)
            .then(res => res.json())
            .then(data => {
                setTravel(data)
            })
    }, [])

    const updateTravelHandler = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        
        let updatedTravel = {
            title: formData.get('title'),
            description: formData.get('description'),
            year: parseInt(formData.get('year')) || 0,
            nights: parseInt(formData.get('nights')) || 0,
            price: parseInt(formData.get('price')) || 0
        }

        // fetch('http://localhost:3000/travels' + travel._id, {
        fetch('http://localhost:3000/travels/' + id, {
            // PUT atnaujina info.
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTravel)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/kelione/' + data._id)
            })  
    }
    
    return (
        <div>
            <h1>Atnaujinti kelionę: {travel?.title}</h1>
            <form className={styles.form} onSubmit={updateTravelHandler}>
                <div className={styles.group}>
                    <label htmlFor="titleInput">Pavadinimas:</label>
                    <input defaultValue={travel.title} type="text" id="titleInput" name="title" /> {/* name, kad iš react pusės pasiimti */}
                </div>
                <div className={styles.group}>
                    <label htmlFor="descriptionInput">Aprašymas:</label>
                    <textarea defaultValue={travel.description} name="description" id="descriptionInput"></textarea>
                </div>
                <div className={styles.group}>
                    <label htmlFor="yearInput">Metai:</label>
                    <input defaultValue={travel.year} type="number" id="yearInput" name="year" /> 
                </div>
                <div className={styles.group}>
                    <label htmlFor="nightsInput">Kiek naktų:</label>
                    <input defaultValue={travel.nights} type="number" id="nightsInput" name="nights" /> 
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina:</label>
                    <input defaultValue={travel.price} type="number" id="priceInput" name="price" /> 
                </div>
                <button type="submit" className="btn">Atnaujinti</button>
            </form>
        </div>
    )
}

export default EditTravelPage