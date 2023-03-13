import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Nav = styled.nav`
  width: 100%;
  background-color: var(--white-color);
  height: 7rem;
  display: flex;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        <div>logo</div>
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
