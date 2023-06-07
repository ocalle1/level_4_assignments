import React from 'react';//step1
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; //Step 2
import Home from './Components/Home'; // step 8
import About from './Components/About';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Header from './Components/Header';
import './Css/Header.css'
import './Css/Footer.css'
import ServiceDetails from './Components/ServiceDetails'; //params 1


function App() { //step 3
  return ( //step 4
    <>
    {/* allows for your app to navigate between different Components */}
    <Router>  {/* step 5 */}  
      <div>
        <Header />
        {/* used to find individual Route by name */}
      <Routes> {/* step 6 */}
        {/* To render user face of a Component - 2 required props - path- define endpoint of Url and element- tells which Component to render*/}
        <Route path="/" element={<Home />} /> {/* step 7 */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<ServiceDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />  {/* params 2 */}
      </Routes>
      <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
