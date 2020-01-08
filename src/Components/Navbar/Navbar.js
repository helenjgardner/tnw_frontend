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
import './Navbar.css';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Helen added to add about page
  const clickAbout = () => {
    props.aboutFunc('about')
    }
    const clickFav = () => {
      props.favFunc('fav')
      }

  return (
    <div id="navbar" style ={ { backgroundColor: "#CCA353" }} >  
    <Navbar color="" light expand="md">
        <NavbarBrand href="/"><h1><img className= "logo" src={"/bee-icon-21.png"} alt="" /> TASTE NOT  WASTE</h1></NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/"><h6>Home</h6></NavLink>
            </NavItem>
            <NavItem>
               {/* helen put in onclick */}
               <NavLink onClick={clickAbout}><h6>About</h6></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={clickFav}><h6>Favourites</h6></NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr_auto"><h6>Log In</h6></NavbarText>
        </Collapse>
      </Navbar>
      </div>
  );
}
export default NavBar;