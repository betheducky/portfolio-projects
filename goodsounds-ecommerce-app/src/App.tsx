import React, { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./default.scss";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import { auth, handleUserProfile } from "./firebase/utils";
import { onSnapshot } from "firebase/firestore";

// Layouts
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";
import Login from "./pages/Login";
import { Unsubscribe } from "firebase/auth";

// User State Initialization
const initialState = {
  currentUser: null,
};

interface AppProps {
  onClick: () => void;
}

interface AppState {
  currentUser: object | null;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = initialState;
  }

  authListener: Unsubscribe | null = null;

  componentDidMount(): void {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);

        if (userRef) {
          onSnapshot(userRef, (snapshot) => {
            if (snapshot.exists()) {
              this.setState({
                currentUser: {
                  id: snapshot.id,
                  ...snapshot.data(),
                },
              });
            }
          });
        }
      }
    });
  }
  componentWillUnmount(): void {
    if (this.authListener) {
      this.authListener();
    }
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <HomePageLayout currentUser={currentUser}>
                  <HomePage />
                </HomePageLayout>
              }
            />
            <Route
              path="/registration"
              element={
                <MainLayout currentUser={currentUser}>
                  <Registration />
                </MainLayout>
              }
            />
            <Route
              path="/login"
              element={
                currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <MainLayout currentUser={currentUser}>
                    <Login />
                  </MainLayout>
                )
              }
            />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
