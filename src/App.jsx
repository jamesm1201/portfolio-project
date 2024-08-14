import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NoPage from './pages/NoPage';
import './App.css'
import Header from './components/Header';

export default function App() {

  return (
    <>
    <main>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>

    <button type="button" className="btn btn-primary">Primary</button>
    <Button variant="success">Success</Button>{' '}
    </main>
    </>
  )
}

 
