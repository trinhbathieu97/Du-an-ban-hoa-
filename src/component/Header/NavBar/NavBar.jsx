import React from "react";
import "./NavBar.modules.scss";
import { Link } from "react-router-dom";

const navBarItem = [
  {
    id: 1,
    name: "Flowers",
    path: "/flowers",
  },
  {
    id: 2,
    name: "Plants",
    path: "/plants",
  },
  {
    id: 3,
    name: "Gifts",
    path: "/gifts",
  },
  {
    id: 4,
    name: "Disconts",
    path: "/disconts",
  },
  {
    id: 5,
    name: "About",
    path: "/about",
  },
];

const NavBar = () => {
  return (
    <div>
      <div className="NavBar">
        {navBarItem.map((item) => (
          <Link to={item.path} className="NavBar_item" key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
