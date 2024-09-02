import * as Bs from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import githubLogo from "../assets/github-mark-white.png";
import jmLogo from "../assets/jm-no-back.png";
import linkedinWhite from "../assets/linkedin-white.png";
import "./footer.css";

export default function Footer() {
  return (
      <footer fluid className="bg-dark h-auto">
        <Bs.Row xl="3">
          <Bs.Col xl="3" className="mb-4 mt-4 ">
            <img src={jmLogo}></img>
          </Bs.Col>
          <Bs.Col xl="3"></Bs.Col>
          <Bs.Col xl="6">
            <Bs.Row>
              <h3>Links</h3>
            </Bs.Row>
            <Bs.Row>
              <Bs.Button
                href="https://github.com/jamesm1201"
                className="w-auto mx-auto"
              >
                <img src={githubLogo}></img>
              </Bs.Button>
            </Bs.Row>
            <Bs.Row>
              <Bs.Button
                href="https://www.linkedin.com/in/james-morley-736b79209"
                className="w-auto mx-auto"
              >
                <img src={linkedinWhite}></img>
              </Bs.Button>
            </Bs.Row>
          </Bs.Col>
        </Bs.Row>
  </footer>
  );
}
