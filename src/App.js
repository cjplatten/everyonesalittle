import flag from "./images/flag.jpeg";
import "./App.css";
import party from "party-js";

function App() {

  // const 


  return (
    <div className="App">
      <header className="App-header">
        <h1>🏳️‍🌈</h1>
      </header>
      <main>
        <button 
         onClick={(e) => party.confetti(e.target)}
         className="flag-button"
        >
          Click me!
        </button>
        <br></br>
        <br></br>
        <button 
         onClick={(e) => party.sparkles(e.target)}
         className="bit-gay-button"
        >
          bit gay!
        </button>
        {/* <img src={flag} 
        // className="App-logo" 
        alt="logo" /> */}
      </main>
    </div>
  );
}

export default App;
