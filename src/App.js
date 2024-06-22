import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Titulo from "./components/Titulo";
import BotaoSomar from "./components/BotaoSomar";
import TreinoList from "./components/TreinoList";
import Trainer from './pages/Trainer';
import MudarTreino from "./components/MudarTreino"; 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Titulo />
        <TreinoList />
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
          <Route path="/" element={<Home />} />
          <Route path="/trainer" element={<Trainer />} /> 
          <Route path="/contact" element={<Contact />} />
          
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

