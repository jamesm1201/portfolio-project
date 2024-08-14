import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel'
import './App.css'
import Header from './components/Header';

export default function App() {

  return (
    <>
    <Header />
    <button type="button" className="btn btn-primary">Primary</button>
    
    <Button variant="success">Success</Button>{' '}

    </>
  )
}

 
