import Perfil from "./Home/Perfil"
import Profile from "./Aboutme/Profile";
import { Routes, Route, Link } from 'react-router-dom';
function App() {
  
  return (
    
    <Routes>
    <Route path="/" element={<Perfil />} />
    <Route path="/Aboutme" element={<Profile />} />
  </Routes>
  )
}

export default App
