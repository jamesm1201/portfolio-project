import * as Bs from "react-bootstrap";
import "./projects.css";

export default function ProjectCards() {
  return (
    <>
      <Bs.Card className="project-card">
        <Bs.CardHeader>Braille Phone Case</Bs.CardHeader>
        <Bs.CardBody>
          <Bs.Card.Text>
            This project offered an alternative to specialised braille
            smartphones. By raising and lowering pins in the surface of the
            case, braille glyphs can be displayed to be read discreetly. This
            offers the user private use of the phone in public places and can be
            used with off-the-shelf smartphones and computers. The prototype
            pictured above is able to decode data from websites and texts into
            braille glyphs and turn the columns beneath the case's surface to
            raise the pins in the corresponding formation.
          </Bs.Card.Text>
          <ul className="project-card-list">
            <ul>
              <h3>Skills</h3>
              <li>
                <strong>Embedded Systems:</strong> The use of low-level code
                with memory mapped I/O alllowed for precise rotation of the
                stepper motors with power saving techniques like frequency
                scaling and dynamic voltage depending on the amount of data to
                display
              </li>
              <li>
                <strong>Product Design:</strong> An emphasis on an intuitive UX
                experience was neccessary and CAD designs for more refined
                versions were included.
              </li>
            </ul>
            <ul>
              <h3>Languages and Stack</h3>
              <li>
                <strong>Arduino:</strong> Used with the Raspberry Pi to turn the
                motors and columns to specific angles.
              </li>
              <li>
                <strong>Java:</strong> This program was responsible for
                recieving data from a device and formatting to allow the data to
                be displayed by 6-bit braille.
              </li>
              <li>
                <strong>CAD: </strong> Used in the design process for prototype
                and higher fidelity models including Pizoelectric Bimprphs to
                raise pins instead of columns with pits and lands
              </li>
            </ul>
          </ul>
        </Bs.CardBody>
      </Bs.Card>
      <Bs.Card className="project-card">
        <Bs.CardHeader>Project 2</Bs.CardHeader>
        <Bs.CardBody>
          <Bs.Card.Text>Card description blah blah blah blah</Bs.Card.Text>
        </Bs.CardBody>
      </Bs.Card>
    </>
  );
}
