import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

import logo from "../../assets/images/logo.png";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: var(--white-color);
  height: 7rem;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 15rem;
    height: 5rem;
    overflow: hidden;

    img {
      height: 100%;
    }
  }

  ul {
    display: flex;
    align-items: center;
    li a {
      margin-left: 2.5rem;
      font-size: 1.4rem;
      font-weight: light;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <div className="logo">
          <Link to="/err">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Features</Link>
          </li>
          <li>
            <Link to="/">Pricing</Link>
          </li>
          <li>
            <Button>Get Started</Button>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
