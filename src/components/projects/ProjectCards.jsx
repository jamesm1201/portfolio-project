import { Card } from "react-bootstrap";
import { CardHeader } from 'react-bootstrap';
import { CardBody } from 'react-bootstrap';
import './projects.css'

export default function ProjectCards(){
    return(
        <>
            <Card className='project-card'>
                <CardHeader >
                    Project 1
                </CardHeader>
                <CardBody>
                    <Card.Text>
                        Card description blah blah blah blah 
                    </Card.Text>
                    <ul className="project-card-list">
                        <ul>
                            <h3>Skills</h3>
                            <li>css</li>
                            <li>js</li>
                        </ul>
                        <ul>
                            <h3>Languages and Stack</h3>
                            <li>blah</li>
                            <li>blah</li>
                        </ul>
                    </ul>
                </CardBody>
            </Card>
            <Card className='project-card'>
            <CardHeader>
                Project 2
            </CardHeader>
            <CardBody>
                <Card.Text>
                    Card description blah blah blah blah 
                </Card.Text>
            </CardBody>
        </Card>
        </>
    );
}