import React from "react";
import { StyleProvider } from "./contexts/StyleContext";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  return (
    <StyleProvider>
      <div className="dark">
        <Main />
      </div>
    </StyleProvider>
  );
}

export default App;
