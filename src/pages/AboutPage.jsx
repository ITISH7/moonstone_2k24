import React from "react";
import classes from "./AboutPage.module.css";
import About2 from "../components/About2/About2";

const AboutPage = () => {
  return (
    <>
      <div className={classes.about_page}>
        <h1 className={classes.headingx}>About</h1>

        <About2 />
      </div>
    </>
  );
};

export default AboutPage;
