import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeAccordion from "../components/HomeAccordion";
import Button from 'react-bootstrap/Button';

export default function Home(){
    return(
        <>
        <Header />
        <div>
            <h1>This is the homepage</h1>
            <HomeAccordion />
            <button type="button" className="btn btn-primary">Primary</button>
            <Button variant="success">Success</Button>{' '}
        </div>
        <Footer />
        </>
    );
}