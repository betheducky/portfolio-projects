import React, { Component } from "react";
import "./styles.scss";
import Button from "../forms/Button";
import { signInWithGoogle } from "../../firebase/utils";



class SignIn extends Component {

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="sign-in">
        <div className="wrap">
          <h2>Log In</h2>
  
          <div className="formwrap">
            <form onSubmit={this.handleSubmit}>
              <div className="social-sign-in">
                <div className="row">
                  <Button onClick={signInWithGoogle} label={"Sign in with Google"}>
                    Sign-in with Google
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default SignIn;
