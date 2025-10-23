import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <FAQ />
      <Contact />
      {/*
      <Footer /> */}
    </>
  )
}

export default App
