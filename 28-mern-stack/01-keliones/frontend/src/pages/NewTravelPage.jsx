import styles from "./NewTravelPage.module.css"
import { useNavigate } from "react-router-dom"

const NewTravelPage = () => {
    const navigate = useNavigate()

    const formSubmitHandler = (event) => {
        event.preventDefault()

        // console.log(event.target.elements);
        // console.log(event.target.elements.title);

        const formData = new FormData(event.target)
        // console.log(formData);

        // pagal input name, turi sutapti, 
        // panaudojus input name ('title') vietoj ref, kad pasiekti input info.
        // console.log(formData.get('title'));

        // objektas suformuojamas - kurį siųsime į backendą
        // todėl raktai turi sutapti su ten parašytais, kad priimtų
        // backendas įdės šiuos duomenis į DB
        let newTravel = {
            title: formData.get('title'),
            description: formData.get('description'),
            // jei laukelis nebus užpildytas ir parseInt atlikti nepavyks, tada įsirašytų 0 
            year: parseInt(formData.get('year')) || 0,
            nights: parseInt(formData.get('nights')) || 0,
            price: parseInt(formData.get('price')) || 0
        }

        // console.log(newTravel);

        // siųsime duomenis į backendą
        // šis fetch atitinka POST iš route
        fetch('http://localhost:3000/travels' , {
            // galima POST parašyti ir mažosiomis
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // perduoti siunčiamus duomenis
            // sukonvertuoti į JSON iš JS
            // perduodame objektą
            body: JSON.stringify(newTravel)
        })
            .then(res => {
                if (res.status == 201) {
                    console.log(res);
                    // konvertuotą rezultatą returninam
                    return res.json()
                }
            })
            .then(data => {
                // console.log(data);

                // po mygtuko "Sukurti" paspaudimo nukreipė į bendrą langą
                // navigate('/')
                navigate('/kelione/' + data._id)
            })  
    }

    return (
        <div>
            <h1>Nauja kelionė</h1>
            <p>Kur keliausim? Arba kur buvome?</p>
            <form onSubmit={formSubmitHandler} className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="titleInput">Pavadinimas:</label>
                    <input type="text" id="titleInput" name="title" /> {/* name, kad iš react pusės pasiimti */}
                </div>
                <div className={styles.group}>
                    <label htmlFor="descriptionInput">Aprašymas:</label>
                    <textarea name="description" id="descriptionInput"></textarea>
                </div>
                <div className={styles.group}>
                    <label htmlFor="yearInput">Metai:</label>
                    <input type="number" id="yearInput" name="year" /> 
                </div>
                <div className={styles.group}>
                    <label htmlFor="nightsInput">Kiek naktų:</label>
                    <input type="number" id="nightsInput" name="nights" /> 
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina:</label>
                    <input type="number" id="priceInput" name="price" /> 
                </div>
                <button type="submit" className="btn">Sukurti</button>
            </form>
        </div>
    )
}

export default NewTravelPage