import Card from 'react-bootstrap/Card';
import haGiang from "../assets/ha-giang.jpg"
import { CardHeader } from 'react-bootstrap';
import { CardBody } from 'react-bootstrap';
import "./IntroCard.css"

export default function IntroCard(){
    return (
        <Card id="card" >
          <CardHeader style={{color: 'darkslategray'}}>Introduction to me</CardHeader>
          <CardBody id="card-body">
            <Card.Text style={{color: 'beige'}}>
            Collaborative and diligent Computer Science graduate, eager to apply my problem solving skills to create impactful digital solutions. 
            Experienced in virtual reality development and web design for multinational companies, with a strong foundation in interpersonal communication and logical reasoning. 
            In my leisure time, I participate in team sports, gaming, and playing the guitar. 
            Over nine years of playing for a rugby team, I honed my teamwork and communication abilities significantly.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Card.Img src={haGiang} alt="Card image" id='card-image' />
          </CardBody>  
        </Card>   
    );
}