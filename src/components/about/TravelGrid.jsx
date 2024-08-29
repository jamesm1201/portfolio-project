
import * as Bs from 'react-bootstrap'
import { LOCATIONS } from '../../data';
import TravelCard from './TravelCard';

export default function TravelGrid(){
    return (
        <section>
            <h2>Highlights from Backpacking</h2>
        <Bs.Row xs={1} md={2}>
        {LOCATIONS.map((idx) => (
        <Bs.Col key={idx}>
          <TravelCard key={idx} {...idx}/>
        </Bs.Col>
      ))}
    </Bs.Row>
    </section>
    ); 
}