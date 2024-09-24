import React from "react";
import { Route, Routes } from "react-router-dom";
import "./default.scss";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";

// Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import Login from "./pages/Login";

// Pages

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomePageLayout>
                <HomePage />
              </HomePageLayout>
            }
          />
          <Route path="/registration" element={
              <MainLayout>
                <Registration />
              </MainLayout>
            } />
            <Route path="/login" element={
              <MainLayout>
                <Login />
              </MainLayout>
            } />
        </Routes>
      </div>
    </>
  );
}

export default App;
