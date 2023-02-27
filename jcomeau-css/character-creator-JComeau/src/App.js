import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <CharacterEditor />
      <div className="perspective-decoration"></div>
      <Footer />
    </>
  );
}

export default App;
