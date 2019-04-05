import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { ROUTE_SIGN_IN, ROUTE_SIGN_UP } from "../routing/routes";

export const NavUnauthorized = () => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink tag={Link} to={ROUTE_SIGN_UP.path}>
        Sign up
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to={ROUTE_SIGN_IN.path}>
        Sign In
      </NavLink>
    </NavItem>
  </Nav>
);