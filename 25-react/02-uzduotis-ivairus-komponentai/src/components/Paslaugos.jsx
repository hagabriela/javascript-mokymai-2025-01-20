import Paslauga from "./Paslauga"
import "./Paslaugos.css"

const Paslaugos = () => {
  return (
    <div className="paslaugos-wrapper">
        <h2>Paslaugos</h2>
        <div className="paslaugos-list">
            <Paslauga />
            <Paslauga />
        </div>
    </div>
  )
}

export default Paslaugos