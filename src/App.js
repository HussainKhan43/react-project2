import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from '../src/Component/Header'
import Footer from '../src/Component/Footer';

function App() {
  return (
      <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Courses" element={<Courses />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />        
      </Routes>
      <Footer></Footer>
      </>
  );
}

export default App;
