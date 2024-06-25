import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Trainer from './pages/Trainer/Trainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/trainer">Trainer</Link> 
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/trainer" element={<Trainer />} /> 
          <Route path="/contact" element={<Contact />} />  
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

