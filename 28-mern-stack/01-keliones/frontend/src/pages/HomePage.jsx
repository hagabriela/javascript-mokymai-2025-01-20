import styles from "./HomePage.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const HomePage = () => {
    const navigate = useNavigate()

    const [travels, setTravels] = useState([])

    useEffect(() => {
        // fetch'as kreipiasi į mūsų backendą
        fetch('http://localhost:3000/travels')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setTravels(data)
            })
    }, [])

    const deleteHandler = (title, id) => {
        if (confirm(`Ar tikrai norite trinti "${title}"?`)) { 
            fetch('http://localhost:3000/travels/' + id, { method: 'DELETE' })
                .then(res => res.json())
                .then(() => {
                    // 1 metodas - frontendiškai nufiltruoti - optimistiškas (jei iš tiesų iš DB neišsitrynė - žmogus nelabai ir sužinos, bet greitesnis būdas)
                    // nufiltruojame, kad viskas, ko neištryniau įsistatytų į masyvą
                    // setTravels(travels.filter(x => x._id != id))

                    // 2 metodas - lėtesnis, bet tikras. Kai gautas confirmation, kad įrašas yra trinamas
                    // fetch į backendą
                    // fetch fetch'e
                    fetch('http://localhost:3000/travels')
                        .then(res => res.json())
                        .then(data => setTravels(data))
                })
        }
    }

    return (
        <div>
            <h1>Kelionės</h1>
            {/* Bet ne kaip klasikiniam css <div className={styles.travels-list}> */}
            {/* <div className={styles.travels_list}> */}
            <div className={styles.travelsList}>

                {
                    travels.length > 0 &&
                    travels.map(travel => (
                        <div className={styles.travelBox} key={travel._id}>
                            <h3>
                                <Link to={"/kelione/" + travel._id}>{travel.title}</Link>
                            </h3>
                            <p>{travel.description}</p>
                            <p><strong>Metai:</strong> {travel.year} m.</p>
                            <p><strong>Kiek naktų:</strong> {travel.nights}</p>
                            <p><strong>Kaina:</strong> {travel.price} &euro;</p>
                            <p>
                                <button onClick={ () => deleteHandler(travel.title, travel._id) } className='btn btn-red'>Trinti</button>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage