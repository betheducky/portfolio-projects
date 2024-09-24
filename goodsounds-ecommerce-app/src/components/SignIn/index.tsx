import React from "react";
import "./styles.scss";
import Button from "../forms/Button";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="wrap">
        <h2>Log In</h2>

        <div className="formwrap">
          <form action="">
            <div className="social-sign-in">
              <div className="row">
                <Button>
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
