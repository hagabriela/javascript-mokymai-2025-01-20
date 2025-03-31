import './App.css'
import Pirmas from './components/Pirmas'
import Antras from './components/Antras'
import Trecias from './components/Trecias'
import Ketvirtas from './components/Ketvirtas'
import Naujienos from './components/Naujienos'
import Parduotuve from './components/Parduotuve'
import Preke from './components/Preke'

function App() {
  return (
    <>
      <Pirmas />
      <Pirmas />
      <Pirmas />
      <Pirmas></Pirmas>
      { Trecias() }
      <Antras />
      <Preke />
      <Antras />
      <Trecias />
      <Trecias />
      <Ketvirtas />
      <Naujienos />
      <Parduotuve />
    </>
  )
}

export default App
