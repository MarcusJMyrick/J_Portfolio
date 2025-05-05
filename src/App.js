import React from "react";
import { StyleProvider } from "./contexts/StyleContext";
import Main from "./containers/Main";
import "./App.css";

function App() {
  return (
    <StyleProvider>
      <div className="dark-mode">
        <Main />
      </div>
    </StyleProvider>
  );
}

export default App;
