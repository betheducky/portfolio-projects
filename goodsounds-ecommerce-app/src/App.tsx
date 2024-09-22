import React from "react";
import { Route } from "react-router-dom";
import "./default.scss";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <div className="app"></div>
      <Header thisProp={true} />
      <div className="main">
        <HomePage prop1="Look@GoodSounds" />
        <Route path="/" Component={HomePage} />
        <Route path="/registration" Component={Registration} />
      </div>
    </>
  );
} 

export default App;
