import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import HomePage from "./pages/HomePage"
import ConfigurationPage from "./pages/ConfigurationPage"
import ContactUsPage from "./pages/ContactUsPage"
import BMWiX3Page from "./pages/BMWiX3Page"
import BMWiXPage from "./pages/BMWiXPage"
import AudiRS6Page from "./pages/AudiRS6Page"
import AudiA1Page from "./pages/AudiA1Page"
import Peugeot200Page from "./pages/Peugeot200Page"
import VWTiguanPage from "./pages/VWTiguanPage"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pirkti" element={<ConfigurationPage />} />
            <Route path="/susisiekti" element={<ContactUsPage />} />
            <Route path="/bmwix3" element={<BMWiX3Page />} />
            <Route path="/bmwix" element={<BMWiXPage />} />
            <Route path="/audirs6" element={<AudiRS6Page />} />
            <Route path="/audia1" element={<AudiA1Page />} />
            <Route path="/peugeot200" element={<Peugeot200Page />} />
            <Route path="/vwtiguan" element={<VWTiguanPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
