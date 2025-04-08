import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="brand">
          <NavLink to='/'>Statyba A</NavLink>
      </div>
      <ul className='links'>
        <li><NavLink to='/'>Pradžia</NavLink></li>
        <li><NavLink to='/services'>Paslaugos</NavLink></li>
        <li><NavLink to='/about-us'>Apie mus</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar

// Nors ir naudojome NavLink "žymą", bet ji sukūrė "a" žymas naršyklėje
// NavLink - uždeda "active" klasę, o Link - ne, todėl naudojamas paprastesniems dalykams
