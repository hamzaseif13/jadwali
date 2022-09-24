import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar';
import Generator from './pages/Generator';
import { JadwaliProvider } from './context/jadwaliContext/JadwaliContext'
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <JadwaliProvider>
        <Router>
        <Navbar />
        <ToastContainer position="top-center"/>
          <Routes>
            <Route path='/' excat element={<Home />} />
            <Route path='/generate' element={<Generator />} />
            <Route path='/feedback' element={<FeedBack />} />
          </Routes>
        </Router>
      </JadwaliProvider>
    </>
  );
}

export default App;
