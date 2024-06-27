import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Transacoes from "./pages/Transacoes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Titulo from "./components/Titulo";
import MoneyList from './components/MoneyList';
import './App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Titulo></Titulo>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/transacoes" element={<Transacoes />} />  
        </Routes>
      </Router>
      <MoneyList /> 
      <Footer />
    </div>
  );
}

export default App;

