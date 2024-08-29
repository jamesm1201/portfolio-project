import * as Bs from 'react-bootstrap'

export default function TravelCard(props){
    return(
        <Bs.Card>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Bs.Card>
    );
}