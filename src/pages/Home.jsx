import Footer from "../components/Footer";
import Header from "../components/Header";
import IntroCard from "../components/home/IntroCard";
import Skills from "../components/home/Skills";
import * as Bs from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <Bs.Row>
          <Bs.Col xl='7'><IntroCard /></Bs.Col>
          <Bs.Col xl='5'> <Skills /></Bs.Col>
        </Bs.Row>
      </div>
      <Footer />
    </>
  );
}
