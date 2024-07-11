import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Transacoes from "./pages/Transacoes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';




function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transacoes" element={<Transacoes />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

