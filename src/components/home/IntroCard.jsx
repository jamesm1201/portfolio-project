
import elephant from "../../assets/elephant.jpg"
import * as Bs from 'react-bootstrap'
import "./intro-card.css"

export default function IntroCard(){
    return (
        <Bs.Card id="card" >
          {/* <CardHeader id='intro-card-title'>James Morley</CardHeader> */}
          <Bs.CardBody id="card-body">
          <ul id='card-content'>
            <li id='card-content'>
              <Bs.Card.Text style={{color: 'black'}} id='intro-card-text'>
                <h2 id='intro-card-title'>James</h2>
                          Aspiring full stack developer with 2 years of experience with Virtual Reality simulations, Database Adiministration and Web Development.
                          </Bs.Card.Text>
            </li>
            <li id='card-content'>
            <Bs.Card.Img src={elephant} alt="James with an elephant in Thailand" id='card-image' />
            </li>
          </ul>
          </Bs.CardBody>  
         </Bs.Card>   
    );
}