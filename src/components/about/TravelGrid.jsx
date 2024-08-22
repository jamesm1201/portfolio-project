
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LOCATIONS } from '../../data';
import TravelCard from './TravelCard';

export default function TravelGrid(){
    return (
        <section>
            <h2>Highlights from Backpacking</h2>
        <Row xs={1} md={2}>
        {LOCATIONS.map((idx) => (
        <Col key={idx}>
          <TravelCard key={idx} {...idx}/>
        </Col>
      ))}
    </Row>
    </section>
    ); 
}