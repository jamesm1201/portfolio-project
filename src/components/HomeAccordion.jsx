import Accordion from 'react-bootstrap/Accordion';

export default function HomeAccordion(){
    return(
        <Accordion defaultActiveKey="0" className='accordion-home'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Game Development</Accordion.Header>
                <Accordion.Body>
                    <strong>Game Development</strong> including Virtual reality skillset
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Embedded Systems</Accordion.Header>
                <Accordion.Body>
                Embedded system skillset including braille phone case
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Web Development</Accordion.Header>
                <Accordion.Body>
                Web development I have learned through courses and projects
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}