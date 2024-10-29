import * as Bs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import githubLogo from "../assets/github-mark-white.png";
import jmLogo from "../assets/jm-no-back.png";
import linkedinWhite from "../assets/linkedin-white.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark">
      <Bs.Container fluid>
        <Bs.Row>
          <Bs.Col xl="3" className="mb-5 mt-5 ms-5 me-5 align-items-center">
            <img src={jmLogo} width={120} height={120} />
            <p className="text-light mt-3">James Morley</p>
          </Bs.Col>
          <Bs.Col className="p-5">
          </Bs.Col>
          <Bs.Col className="p-5">
            <h3 className="text-light">Get in touch!</h3>
            <p className="text-light">jhmorley@icloud.com</p>
            <Bs.Button
              href="https://github.com/jamesm1201"
              className=" btn-dark"
            >
              <img src={githubLogo} width={50} height={50} />
            </Bs.Button>
            <Bs.Button
              href="https://www.linkedin.com/in/james-morley-736b79209"
              className="btn-dark"
            >
              <img src={linkedinWhite} width={50} height={50} />
            </Bs.Button>
          </Bs.Col>
        </Bs.Row>
      </Bs.Container>
    </footer>
  );
}
