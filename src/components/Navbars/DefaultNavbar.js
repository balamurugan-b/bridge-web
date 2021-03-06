import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import NavItems from "./NavItems.js"

function DefaultNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 399 ||
  //       document.body.scrollTop > 399
  //     ) {
  //       setNavbarColor("");
  //     } else if (
  //       document.documentElement.scrollTop < 400 ||
  //       document.body.scrollTop < 400
  //     ) {
  //       setNavbarColor("navbar-transparent");
  //     }
  //   };
  //   window.addEventListener("scroll", updateNavbarColor);
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/"
              id="navbar-brand"
            >
              bridge
            </NavbarBrand>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <NavItems type={props.type}></NavItems>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DefaultNavbar;
