import React from "react";
import { Route } from "react-router-dom";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
