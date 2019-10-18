import React from "react";
import { Link } from "react-router-dom";
import MenuCss from "../css/Menu.css";
import styled from "styled-components";

const Menu = () => {
  return (
    <>
      <div className="Header">
        <ul>
          <li className="header-li">
            <Link to="/login">로그인/회원가입</Link>
          </li>
          <li className="header-li">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="header-li">
            <Link exact to="/about">
              About
            </Link>
          </li>
          <li className="header-li">
            <Link to="/about/foo">About Foo</Link>
          </li>
          <li className="header-li">
            <Link exact to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
