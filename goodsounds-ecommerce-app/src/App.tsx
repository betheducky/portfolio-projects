import React from "react";
import "./default.scss";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <><div className="app"></div>
            <Header thisProp={true} />
      <div className="main">
        <HomePage prop1="Look@GoodSounds" />
      </div>
    </>
  );
}

export default App;
