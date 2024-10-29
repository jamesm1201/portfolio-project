import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import Tabs from "./Tabs";
import "./Skills.css";
import * as Bs from "react-bootstrap";

export default function Skills() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <section id="skills">
      <Bs.Row>
        <Bs.Col xl='4'>
          {/* <Tabs /> */}
          <h2>Programming skills</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "frontend"}
              onSelect={() => handleSelect("frontend")}
            >
              Frontend
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "backend"}
              onSelect={() => handleSelect("backend")}
            >
              Backend
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "gameDevelopment"}
              onSelect={() => handleSelect("gameDevelopment")}
            >
              Game Development
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "embeddedSystems"}
              onSelect={() => handleSelect("embeddedSystems")}
            >
              Embedded Systems
            </TabButton>
          </menu>
        </Bs.Col>
        <Bs.Col xl='8'>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
            </div>
          )}
        </Bs.Col>
      </Bs.Row>
    </section>
  );
}
