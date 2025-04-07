// kaip norime, taip ir pavadiname
import stiliai from './Penktas.module.css'

const Penktas = () => {
    console.log(stiliai); // naršyklė priskiria keistus pavadinimus klasėms

  return (
    <div>
        <p className={stiliai.pirmas}>Pirmas tekstas</p>
        <p className={stiliai.penktas}>Penktas tekstas</p>
    </div>
  )
}

export default Penktas