import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; //Step 2
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './Css/Header.css'
import './Css/Footer.css'
import ServiceDetails from './Components/ServiceDetails';
import React from 'react';


function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<ServiceDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
