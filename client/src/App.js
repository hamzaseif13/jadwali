import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Generator from "./pages/Generator";
import { JadwaliProvider } from "./context/jadwaliContext/JadwaliContext";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <JadwaliProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/generate" element={<Generator />} />
            <Route path="/" excat element={<Navigate  to="/generate" />}/>
              
           
          </Routes>
        </Router>
      </JadwaliProvider>
    </>
  );
}

export default App;
