import { useState } from "react";
import "./App.css";

import Fighter from "./components/Fighter";
import FighterScreen from "./components/FighterScreen";

function App() {
  const fighters = [
    { name: "Roy", color: "blue" },
    { name: "Ganondorf", color: "brown" },
    { name: "Mario", color: "lightskyblue" },
    { name: "Lucina", color: "pink" },
    { name: "Marth", color: "dodgerblue" },
    { name: "Link", color: "gray" },
    { name: "Inkling", color: "orange" },
    { name: "Samus", color: "gold" },
    { name: "Fox", color: "mediumseagreen" },
    { name: "Sheik", color: "coral" },
    { name: "Zelda", color: "midnightblue" },
    { name: "Ken", color: "firebrick" },
  ];
  const [selectedFighter, setSelectedFighter] = useState();

  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">
        {fighters.map((fighter, index) => (
          <Fighter
            key={index}
            fighter={fighter}
            setSelectedFighter={setSelectedFighter}
          />
        ))}
      </div>
      {selectedFighter && <FighterScreen fighter={selectedFighter} />}
    </div>
  );
}

export default App;
