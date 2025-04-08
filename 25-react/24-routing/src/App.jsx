import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import MainLayout from './layouts/MainLayout';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import NotFoundPage from './pages/NotFoundPage';

// Čia ir aprašomos taisyklės

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Svarbu eiliškumas, kaip if - kurį randa, tą ir vykdo */}
        <Route path='/' element={<MainLayout />}>
          {/* homepage: /  */}
          <Route path='/' element={<HomePage />} />
          {/* about us: /about-us  */}
          <Route path='/about-us' element={<AboutUsPage />} />
          {/* <Route path='/about-us/id:' element={<AboutUsPage />} /> */}
          {/* services: /services  */}
          <Route path='/services' element={<ServicesPage />} />
          {/* visi kiti  */}
          <Route path='*' element={<NotFoundPage />} /> {/* Kaip else dalis - visi kiti psl. */}
        </Route>
        {/* <Route path='/admin' element={<AdminLayout />}>
           admin pradinis: /admin
          <Route path='/' element={<DashBoardPage />} />
          statistika: /admin/statistics
          <Route path='/statistics' element={<StatisticsPage />} />
          užsakymų puslapis: /admin/orders
          <Route path='/admin/orders' element={<OrdersPage />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
