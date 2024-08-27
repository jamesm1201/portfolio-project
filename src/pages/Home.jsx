import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from 'react-bootstrap/Button';
import IntroCard from "../components/home/IntroCard";
import Skills from "../components/home/Skills";

export default function Home(){
    return(
        <>
        <Header />
        <div>
            <IntroCard />
            <Skills />
            <button type="button" className="btn btn-primary">Primary</button>
            <Button variant="success">Success</Button>{' '}
        </div>
        <Footer />
        </>
    );
}