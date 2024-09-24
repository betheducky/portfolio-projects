import React from "react";
import "./styles.scss";
import Button from "../forms/Button";
import { signInWithGoogle } from "../../firebase/utils";



const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="wrap">
        <h2>Log In</h2>

        <div className="formwrap">
          <form>
            <div className="social-sign-in">
              <div className="row">
                <Button onClick={signInWithGoogle}>
                  Sign-in with Google
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
