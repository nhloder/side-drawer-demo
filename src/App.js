import React from "react";
import logo from "./logo.svg";
import Toolbar from "./components/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main style ={{marginTop: '56px'}}>
        <p> This is some Page content</p>
      </main>
    </div>
  );
}

export default App;
