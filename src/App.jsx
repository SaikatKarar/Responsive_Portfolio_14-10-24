import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Projects from './component/Projects'
import Services from './component/Services'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Clients from './component/Clients'
import Footer from './component/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/hero' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App