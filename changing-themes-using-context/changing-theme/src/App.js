import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
// import { ThemeContext } from './ThemeContext';



function App() {
  return (
   <>
  <Main />
  <Navbar />
   <Footer />
   </>
  );
}

export default App;


// 1. setup elements for the Footer, Main, Navbar//
// 2. Create the ThemeContext so that all you have to do is import it into the index.js//
// 3. Create the Navbar, Main, and Footer Components//
// Connect all 3 Components to the index.js/ThemeContext