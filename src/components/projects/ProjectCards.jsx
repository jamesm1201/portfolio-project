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