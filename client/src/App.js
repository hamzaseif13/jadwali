import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Generator from './pages/Generator';
import { JadwaliProvider } from './context/jadwaliContext/JadwaliContext'
import Xd from './pages/Xd';


function App() {
  return (
    <>
      <JadwaliProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Generator />} />
            <Route path='/lol' excat element={<Xd />} />
          </Routes>
        </Router>
        <Footer />
      </JadwaliProvider>
    </>
  );
}

export default App;
