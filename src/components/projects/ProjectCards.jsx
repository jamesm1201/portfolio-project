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
        <Bs.AccordionItem eventKey="1" className="text-bg-dark">
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
                    <strong>Game Development:</strong> Using object-oriented
                    patterns to decouple functionality e.g. Observer pattern and
                    event driven programming.
                  </li>
                  <li>
                    <strong>Software Lifecycle:</strong> Created workflows
                    involving a team of varied roles. Implemented in-house and
                    client based user testing.
                  </li>
                </ul>
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Languages and Stack</strong>
                </h3>
                <ul>
                  <li>
                    <strong>C#:</strong> Using this language for game
                    development has led me to focus on C# based backends with
                    .Net.
                  </li>
                  <li>
                    <strong>Unreal Engine:</strong> The VR plugins provided help
                    create robust simulations with high optimisation potential.
                    I learned a lot about animation and physics simulations
                    which proved interesting.
                  </li>
                </ul>
              </Bs.Col>
            </Bs.Row>
          </Bs.AccordionBody>
        </Bs.AccordionItem>
        <Bs.AccordionItem eventKey="2" className="text-bg-dark">
          <Bs.AccordionHeader>Dream Renewables Web App</Bs.AccordionHeader>
          <Bs.AccordionBody>
            <Bs.Row className="align-items-center">
              <Bs.Col xl="6">
                The charity Dream Renewables is a great organisation teaching Ghanaian communities to create and maintain energy solutions. 
                I am part of a team working with the charity to overhaul their online presence by developing a new Web App. 
                Frontend is developed in React with TypeScript and hosting of databases and server is Heroku cloud based.
                Feel free to peruse progress in the public GitHub repo (link in header)
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Skills</strong>
                </h3>
                <ul>
                  <li>
                    <strong>Frontend:</strong> React and Bootstrap together provide a powerful combination for making a site simple and responsive. 
                  </li>
                  <li>
                    <strong>Cloud Infrastructure:</strong> Payments, heroku, aws bitbucket and secue access, Terraform infrastructure allocation
                  </li>
                </ul>
              </Bs.Col>
              <Bs.Col xl="3">
                <h3 className="text-center">
                  <strong>Languages and Stack</strong>
                </h3>
                <ul>
                  <li>
                    <strong>TypeScript:</strong> Using this over JavaScript promotes use of interfaces so I know what form of data to expect.
                  </li>
                  <li>
                    <strong>Terraform:</strong> This language is perfect for working in teams as all current infrastructure can be checked by looking at the repo. 
                  </li>
                  <li>
                    <strong>Cypress:</strong> End-to-end testing is a neccessary to improve user experience, Cypress is a very useful tool 
                  </li>
                  <li>
                    <strong>Strapi CMS:</strong> Using this tool, the client is able to easily change content on the website without having to look at the code. 
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
