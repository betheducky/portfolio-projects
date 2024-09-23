import React from "react";
import { Route, Routes } from "react-router-dom";
import "./default.scss";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
