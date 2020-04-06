import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory.jsx";
import MenuItem from "../../components/menu-item/MenuItem.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
