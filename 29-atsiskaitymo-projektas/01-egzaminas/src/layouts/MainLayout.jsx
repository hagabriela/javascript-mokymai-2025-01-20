import { Outlet, NavLink, Link } from "react-router-dom"
import styles from "./MainLayout.module.css"

const MainLayout = () => {
  return (
    <div>
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.navRow}>
                    <NavLink to="/">Automobilių <br /> <span>pardavimas</span></NavLink>
                    <ul className={styles.links1}>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Pradžia</NavLink></li>
                        <li><NavLink to="/pirkti" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Pirkti automobilį</NavLink></li>
                        <li><NavLink to="/susisiekti" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Susisiekti</NavLink></li>
                    </ul>
                </div>
            </div> 
        </nav>
        <div className={styles.content}>
            <Outlet />
        </div>
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerRow}>
                    <p>Automobilių pirkimas yra malonus dalykas, leidžiantis žmonėms susikonfiguruoti ir išsirinkti norimą automobilį. Tai patogus būdas susikurti savo svajonių transporto priemonę.</p>
                    <ul className={styles.links2}>
                        <li>Nuorodos</li>
                        <li><Link to="/pirkti">Automobilių pirkimas</Link></li>
                        <li><Link to="/susisiekti">Kontaktai</Link></li>
                        <li><Link to="/">Privatumo politika</Link></li>
                    </ul>
                    <div className={styles.contacts}>
                        <p>Kontaktai</p>
                        <p className={styles.badge}>info@autopirkimas.lt</p>
                        <p className={styles.badge}>+370 600 00 000</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default MainLayout