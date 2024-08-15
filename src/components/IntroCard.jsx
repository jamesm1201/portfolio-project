import Card from 'react-bootstrap/Card';
import haGiang from "../assets/ha-giang.jpg"
import "./IntroCardStyle.css"

export default function IntroCard(){
    return (
        <container className="container">
        <Card className="bg-dark text-black" >
          <Card.Img src={haGiang} style={{ objectFit: 'contain', marginTop: '10px', marginBottom: '10px', margin: '20px' }} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        </container>
    );
}