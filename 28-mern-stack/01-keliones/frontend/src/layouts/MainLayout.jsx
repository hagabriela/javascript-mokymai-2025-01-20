import { Outlet, NavLink } from "react-router-dom"
import styles from "./MainLayout.module.css"

const MainLayout = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <NavLink to="/">Kelionės</NavLink>
                </div>
                <ul className={styles.links}>
                    <li>
                        <NavLink to="/">Pradžia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sukurti">Sukurti naują</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.content}>
                <Outlet />
            </div>

        </div>
    )
}

export default MainLayout