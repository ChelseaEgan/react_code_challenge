import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "../styles/Header.css";

const Header = () => (
  <header>
    <Navbar collapseOnSelect fluid inverse>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact to="/">
            <NavItem>Dashboard</NavItem>
          </LinkContainer>
          <LinkContainer exact to="/settings">
            <NavItem>Settings</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;
