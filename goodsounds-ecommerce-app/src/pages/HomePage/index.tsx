import React from "react";
import "./styles.scss";
import Directory from "../../components/Directory";

interface Props {
  prop1: string;
}

const HomePage = ({ prop1 }: Props) => {
  return (
    <>
      <section className="home-page">
        <Directory prop2={"LOOK!prop2"} />
      </section>
    </>
  );
};

export default HomePage;
