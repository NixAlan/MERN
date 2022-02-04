import "./App.css";
import { Router } from "@reach/router";

import React from "react";
import Home from "./Components/Home";
import NumberOrWord from "./Components/Numberofword";
import Wordformat from "./Components/Wordformat";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Example path="/dogs/:firstname/:lastname" /> */}
        <Home path="/home" />
        <NumberOrWord path="/:numberorword" />
        <Wordformat path=":word/:inputColor/:inputBackgroundColor" />
      </Router>
    </div>
  );
}

export default App;
