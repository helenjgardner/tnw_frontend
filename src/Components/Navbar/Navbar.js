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
        <NavbarBrand href="/"><h4><img className= "logo" src={"/bee-icon-21.png"} width="30" height= "30" alt="" /> TASTE NOT  WASTE</h4></NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
               {/* helen put in onclick */}
               <NavLink onClick={clickAbout}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={clickFav}>Favourites</NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="mr_auto">Log In</NavbarText>
        </Collapse>
      </Navbar>
      </div>
  );
}
export default NavBar;