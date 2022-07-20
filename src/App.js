import "./App.css";

function App() {
  const fighters = [
    "Roy",
    "Ganondorf",
    "Mario",
    "Luigi",
    "Marth",
    "Link",
    "Inkling",
    "Samus",
    "Fox",
    "Sheik",
    "Zelda",
    "Ken",
  ];

  const renderFighters = () => {
    return fighters.map((fighter, index) => (
      <div>
        <img
          src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${fighter.toLowerCase()}.png`}
          className="fighter-img"
        />
        <h5 className="fighter-name">{fighter}</h5>
      </div>
    ));
  };
  return (
    <div className="App">
      <h1>Fighters</h1>
      <div className="fighters-grid">{renderFighters()}</div>
    </div>
  );
}

export default App;
