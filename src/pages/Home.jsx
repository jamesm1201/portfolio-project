import Header from "../components/Header";
import HomeAccordion from "../components/HomeAccordion";

export default function Home(){
    return(
        <>
        <Header />
        <div>
            <h1>This is the homepage</h1>
            <HomeAccordion />
        </div>
        </>
    );
}