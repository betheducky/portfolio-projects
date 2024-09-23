import React from "react";
import "./styles.scss";
import Directory from "../../components/Directory";


const HomePage = () => {
  return (
    <>
      <section className="home-page">
        <Directory prop2={"LOOK!prop2"} />
      </section>
    </>
  );
};

export default HomePage;
