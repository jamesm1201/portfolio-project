import Card from 'react-bootstrap/Card';

export default function TravelCard(props){
    return(
        <Card>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </Card>
    );
}