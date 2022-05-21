import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Generator from './pages/Generator';



function App() {
  return (
    <>
    <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Generator />} />
        </Routes>
      </Router>
    <Footer/>
    </>
  );
}

export default App;
