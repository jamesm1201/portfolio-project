import {Card, CardImgOverlay, Nav} from "react-bootstrap";
import {CardHeader} from "react-bootstrap";
import {CardBody} from "react-bootstrap";
import seAsia from "../assets/se-asia-second.jpg"
import { useState } from "react";
import LocationButton from "./LocationButton";
import LocationTabs from "./LocationTabs";
import { LOCATIONS } from "../data";

export default function InterMap() {
    const [selectedLoc, setSelectedLoc] = useState();
    function handleSelect(selectedButton) {
        setSelectedLoc(selectedButton);
    }
    return (
        <>
        <Card >
            <CardHeader>
            <Card.Title>Recent Travels</Card.Title>
                <Card.Text>
                Select a country to see what I got up to!
                </Card.Text>
                <LocationTabs />
                <menu>
                    <LocationButton
                    isSelected={selectedLoc === "thailand"}
                    onSelect={() => handleSelect("thailand")}
                    >
                    Thailand
                    </LocationButton>
                    <LocationButton
                    isSelected={selectedLoc === "vietnam"}
                    onSelect={() => handleSelect("vietnam")}
                    >
                    Vietnam
                    </LocationButton>
                    <LocationButton
                    isSelected={selectedLoc === "back"}
                    onSelect={() => handleSelect(null)}
                    >
                    Back to Map
                    </LocationButton>
            </ menu>
            </CardHeader>
            <Card.Body>
                {selectedLoc ? (
                    <section>
                        <h3>{LOCATIONS[selectedLoc].title}</h3>
                        <p>{LOCATIONS[selectedLoc].description}</p>
                    </section>
                ) : <Card.Img variant="bottom" src={seAsia} alt='map' /> }
            </Card.Body>
        </Card>
        </>
    );
}
