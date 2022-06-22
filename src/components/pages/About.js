import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <h1>About</h1>
      <p>GitHub Finder</p>
      <p>Version: 1.0.0</p>

      <p>
        Developed by:{" "}
        <a href="http://www.michaelogrady.net" target="_blank">
          Michael O'Grady
        </a>{" "}
        using the{" "}
        <a href="https://docs.github.com/en/rest" target="_blank">
          GitHub REST API
        </a>
      </p>
    </Fragment>
  );
};

export default About;
