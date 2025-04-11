import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import HomePage from "./pages/HomePage"
import EditTravelPage from "./pages/EditTravelPage"
import NewTravelPage from "./pages/NewTravelPage"
import TravelDetailPage from "./pages/TravelDetailPage"

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/sukurti" element={<NewTravelPage />} />
              <Route path="/kelione/:id" element={<TravelDetailPage />} />
              <Route path="/atnaujinti/:id" element={<EditTravelPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </>
    )
}

export default App
