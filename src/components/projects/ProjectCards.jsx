import * as Bs from "react-bootstrap";
import "./projects.css";

export default function ProjectCards() {
  return (
    <>
      <Bs.Accordion defaultActiveKey="0" className="me-5 mb-5 mt-5 ms-5 ">
        <Bs.AccordionItem eventKey="0" className="text-bg-dark">
          <Bs.AccordionHeader className="text-center ">
            Braille Phone Case
          </Bs.AccordionHeader>
          <Bs.AccordionBody>
            <Bs.Row className="align-items-center">
              <Bs.Col xl="6">
                This project offered an alternative to specialised braille
                smartphones. By raising and lowering pins in the surface of the
                case, braille glyphs can be displayed and read discreetly. This
                offers the user private use of the phone in public places and
                can be used with off-the-shelf smartphones and computers. The
                prototype pictured above is able to decode data from websites
                and texts into braille glyphs and turn the columns beneath the
                case's surface to raise the pins in the corresponding formation.
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Skills</strong>
                </h3>
                <ul>
                  <li>
                    <strong>Embedded Systems:</strong> The use of low-level code
                    with memory mapped I/O alllowed for precise rotation of the
                    stepper motors with power saving techniques like frequency
                    scaling and dynamic voltage depending on the amount of data
                    to display
                  </li>
                  <li>
                    <strong>Product Design:</strong> An emphasis on an intuitive
                    UX experience was neccessary and CAD designs for more
                    refined versions were included.
                  </li>
                </ul>
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Languages and Stack</strong>
                </h3>
                <ul>
                  <li>
                    <strong>Arduino:</strong> Used with the Raspberry Pi to turn
                    the motors and columns to specific angles.
                  </li>
                  <li>
                    <strong>Java:</strong> This program was responsible for
                    recieving data from a device and formatting to allow the
                    data to be displayed by 6-bit braille.
                  </li>
                  <li>
                    <strong>CAD: </strong> Used in the design process for
                    prototype and higher fidelity models including Pizoelectric
                    Bimorphs to raise pins instead of columns with pits and
                    lands
                  </li>
                </ul>
              </Bs.Col>
            </Bs.Row>
          </Bs.AccordionBody>
        </Bs.AccordionItem>
        <Bs.AccordionItem eventKey="1">
          <Bs.AccordionHeader>
            Virtual Reality Simulations with Wessex Archaeology
          </Bs.AccordionHeader>
          <Bs.AccordionBody>
            <Bs.Row className="align-items-center">
              <Bs.Col xl="6">
                During my time with Wessex Archaeology, I worked on numerous VR
                projects including a Roman villa, an underwater wreck of a
                Lancaster Bomber and a Medieval House in Salisbury. My work
                always had an emphasis on gamification and User Experience in
                order to provide an intuitive and engaging experience. I created
                a menu system attached to the controller in-game which the
                player could use to easily navigate through the system. I also
                developed a treasure hunt in the projects to increase appeal to
                school children helping diversify the potential audience and
                highlight specific parts of the simulation for educational
                purposes.
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Skills</strong>
                </h3>
                <ul>
                  <li>
                    <strong>Game Development:</strong> 
                  </li>
                  <li>
                    <strong>Software Lifecycle:</strong> Development of workflows involving a team of varied roles 
                  </li>
                </ul>
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Languages and Stack</strong>
                </h3>
                <ul>
                  <li>
                    <strong>Arduino:</strong> Used with the Raspberry Pi to turn
                    the motors and columns to specific angles.
                  </li>
                  <li>
                    <strong>Java:</strong> This program was responsible for
                    recieving data from a device and formatting to allow the
                    data to be displayed by 6-bit braille.
                  </li>
                  <li>
                    <strong>CAD: </strong> Used in the design process for
                    prototype and higher fidelity models including Pizoelectric
                    Bimorphs to raise pins instead of columns with pits and
                    lands
                  </li>
                </ul>
              </Bs.Col>
            </Bs.Row>
          </Bs.AccordionBody>
        </Bs.AccordionItem>
      </Bs.Accordion>
    </>
  );
}
