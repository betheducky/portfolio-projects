import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./default.scss";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import { auth } from "./firebase/utils";

// Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import Login from "./pages/Login";
import { Unsubscribe } from "firebase/auth";

// User State Initialization
const initialState = {
  currentUser: null
}

interface AppProps {
  onClick: () => void;
}

class App extends Component {
  constructor(props: AppProps) {
    super(props);
    this.state = initialState
  }

  authListener: Unsubscribe | null = null;
 
  componentDidMount(): void {
    this.authListener = auth.onAuthStateChanged(userAuth => {
      
      if (userAuth) {
        this.setState({ currentUser: userAuth });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }
  componentWillUnmount(): void {
    if (this.authListener) {
      this.authListener();
    }
  }

  render() {
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
  }

export default App;
