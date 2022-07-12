import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Generator from './pages/Generator';
import { JadwaliProvider } from './context/jadwaliContext/JadwaliContext'
import Home from './pages/Home';


function App() {
  return (
    <>
      <JadwaliProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' excat element={<Home />} />
            <Route path='/generate' element={<Generator />} />
          </Routes>
        </Router>
      </JadwaliProvider>
    </>
  );
}

export default App;
