import React from "react";
import { Link } from "react-router-dom";
import MenuCss from "../css/Menu.css";

const Menu = () => {
  return (
    <div className="Header">
      <ul>
        <div className="EachMenu">
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
        </div>
        <div className="EachMenu">
          <li>
            <Link exact to="/about">
              About
            </Link>
          </li>
        </div>
        <div className="EachMenu">
          <li>
            <Link to="/about/foo">About Foo</Link>
          </li>
        </div>
        <div className="EachMenu">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
