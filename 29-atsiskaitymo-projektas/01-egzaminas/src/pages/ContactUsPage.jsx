import styles from "./ContactUsPage.module.css"

import { useRef, useState } from "react"

const ContactUsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telNumber, setTelNumber] = useState('')
    const [message, setMessage] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const telNumberRef = useRef()
    const messageRef = useRef()

    const [errors, setErrors] = useState({
        name: false,
        email: false,
    })

    // Patikrina, ar reikalingi laukeliai nepalikti tušti. Jei tušti, setErrors praneša apie klaidą. 
    // trim() užtikrina, kad tarpeliai nelaikomi įvedimu.
    const validate = () => {
        const newErrors = {
            name: nameRef.current.value.trim() === "",
            email: emailRef.current.value.trim() === "",
        }
        setErrors(newErrors)
        return !newErrors.name && !newErrors.email
    }

    // Kai vartotojas pradeda rašyti, klaida „išnyksta“. Tai leidžia iškart paslėpti klaidą kai laukas redaguojamas.
    const handleChange = (field) => {
        setErrors((prev) => ({ ...prev, [field]: false }))
    }

    const submitHandler = (event) => {
        event.preventDefault()

        setName(nameRef.current.value)
        setEmail(emailRef.current.value)
        setTelNumber(telNumberRef.current.value)
        setMessage(messageRef.current.value)

        // Neleidžia formos iškart išsiųsti. Pirma atliekama validacija. Tik tada, kai viskas gerai – leidžia tęsti (pvz. siųsti į serverį).
        if (!validate()) {
            return
        }

        nameRef.current.value = ''
        emailRef.current.value = ''
        telNumberRef.current.value = ''
        messageRef.current.value = ''
    }

    return (
        <>
            <div className={styles.contactUs}>
                <div className={styles.container}>
                    <div className={styles.flexWrapper}>
                        <div className={styles.textSide}>
                            <p>Turite klausimų?</p>
                            <h2>Susisiekite</h2>
                            <p>+370 600 00 000</p>
                            <p>info@autopirkimas.lt</p>
                        </div>
                        <div className={styles.formSide}>
                            <form onSubmit={submitHandler}>
                                <p>
                                    <input size={40} maxLength={400} aria-required="true" aria-invalid="false" placeholder="Jūsų vardas *" type="text" name="name" ref={nameRef} onChange={() => handleChange("name")} />
                                    <span className={`${styles.errorMessage} ${errors.name ? styles.show : ""}`}>Prašome užpildyti šį laukelį!</span>
                                </p>
                                <div className={styles.emailTelRow}>
                                    <p>
                                        <input size={40} maxLength={400} aria-required="true" aria-invalid="false" placeholder="El. paštas *" type="email" name="email" ref={emailRef}  onChange={() => handleChange("email")} />
                                        <span className={`${styles.errorMessage} ${errors.email ? styles.show : ""}`}>Įveskite el. pašto adresą!</span>
                                    </p>
                                    <p>
                                        <input size={40} maxLength={400} aria-invalid="false" placeholder="Tel. numeris" type="tel" name="tel" ref={telNumberRef} />
                                    </p>
                                </div>
                                <p>
                                    <textarea cols={20} rows={1} maxLength={2000} aria-invalid="false" placeholder="Žinutė" name="message" id="message" ref={messageRef}></textarea>
                                </p>
                                <button type="submit">Siųsti</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ContactUsPage