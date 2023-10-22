import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import WorkExperience from './pages/WorkExperience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
    <Header />

    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about-me" element={<AboutMe/>} />
        <Route path="/work-experience" element={<WorkExperience/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>

    <Footer />

    </div>
  );
}

export default App;
