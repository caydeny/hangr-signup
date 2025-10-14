import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      {/* <div class="gradient-divider"></div> */}
      <About />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default App
