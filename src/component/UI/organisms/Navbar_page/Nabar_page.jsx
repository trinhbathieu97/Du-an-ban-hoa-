import React from "react";
import "./Navbar.modules.scss";
import { Link, useLocation } from "react-router-dom";

const Nabar_page = ({ type }) => {
  const path = useLocation().pathname;

  return (
    <div>
      <div className="navbar_abuot">
        <Link to="/" className="hoverHome">
          Home
        </Link>
        <span>/</span>
        <Link to={path} className="nabar_text">
          {type}
        </Link>
      </div>
      <div className="about_title">{type}</div>
    </div>
  );
};

export default Nabar_page;
