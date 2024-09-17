import React from "react";
import './styles.scss';
import Directory from "../../components/Directory";

interface Props {
  prop1: string;
}

const HomePage = ({prop1}: Props) => {
  return (
    <>
      <h1>Good Sounds.</h1>
      <br />
      <p>If it sounds good, it's {prop1}</p>
      <Directory prop2={"LOOK!prop2"}/>
    </>
  );
};

export default HomePage;
