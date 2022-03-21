import React from "react";
import "./App.css";
import DragMain from "./features/Drag";
function App(props) {
  return (
    <>
      <h1 className="header">React drag and drop basic</h1>
      <DragMain />
    </>
  );
}

export default App;
