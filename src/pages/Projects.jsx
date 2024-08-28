import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjCarousel from "../components/projects/ProjCarousel";
import ProjectCards from "../components/projects/ProjectCards";
import '../components/projects/projects.css'
import '../components/projects/projects.css'

export default function Projects(){
    return(
        <>
        <Header />
        <div>
            <h2 className='projects-title'>Projects</h2>
            <ProjCarousel />
        </div>
        <div >
            <ProjectCards />
        </div>
        <Footer />
        </>
    );
}