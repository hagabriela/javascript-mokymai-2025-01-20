import styles from "./HomePage.module.css"

import { Link } from "react-router-dom"

import BMWIX3 from "./images/bmw3.png"
import BMWIX from "./images/bmwX.png"
import AudiR from "./images/audiR.png"
import AudiA from "./images/audiA.png"
import Peugeot from "./images/peugeot.png"
import VW from "./images/vw.png"

const HomePage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Svajojate apie <span> naują automobilį?</span></h1>
          <h2>Mes jums padėsime išsirinkti!</h2>
          <div className={styles.links}>
            <Link to="/" className={styles.primary}>Žiūrėti automobilius</Link>
            <Link to="/susisiekti">Susisiekti</Link>
          </div>
        </div>
      </header>

      <div className={styles.paragraph}>
        <div className={styles.container}>
          <p>Automobilių pirkimas yra malonus dalykas, leidžiantis žmonėms susikonfiguruoti ir išsirinkti norimą automobilį. Tai patogus būdas susikurti savo svajonių transporto priemonę.</p>
        </div>
      </div>

      <div className={styles.contentBlock}>
        <div className={styles.container}>
          <h2>Parduodami automobiliai</h2>
          <div className={styles.autos}>
            <div className={styles.auto}>
                <img src={BMWIX3} alt="bmw" />
                <h3>BMW iX3</h3>
                <p>Nuo 75 360 &euro;</p>
                <Link to="/bmwix3" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
            <div className={styles.auto}>
              <img src={BMWIX} alt="bmw" />
                <h3>BMW iX</h3>
                <p>Nuo 98 800 &euro;</p>
                <Link to="/bmwix" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
            <div className={styles.auto}>
              <img src={AudiR} alt="audi" />
                <h3>Audi RS6 </h3>
                <p>Nuo 52 900 &euro;</p>
                <Link to="/audirs6" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
            <div className={styles.auto}>
              <img src={AudiA} alt="audi" />
                <h3>Audi A1 </h3>
                <p>Nuo 49 500 &euro;</p>
                <Link to="/audia1" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
            <div className={styles.auto}>
              <img src={Peugeot} alt="peugeot" />
                <h3>Peugeot 208</h3>
                <p>Nuo 19 700 &euro;</p>
                <Link to="/peugeot200" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
            <div className={styles.auto}>
              <img src={VW} alt="vokswagen" />
                <h3>Vokswagen Tiguan</h3>
                <p>Nuo 33 700 &euro;</p>
                <Link to="/vwtiguan" className={styles.primary2}>Daugiau</Link>
                <Link to="/susisiekti">Susisiekti</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage