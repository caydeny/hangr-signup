import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Features />
              <FAQ />
              <Contact />
            </>
          }
        />

        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
