import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div id="navall" style ={ { backgroundColor: "#CCA353" }} >  
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><h4><img className= "logo" src={"/bee-icon-21.png"} width="25" height= "20" alt="" />TASTE NOT  WASTE</h4></NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Receips">Recipes</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Log In</NavbarText>
        </Collapse>
      </Navbar>
      </div>
  );
}
export default NavBar;