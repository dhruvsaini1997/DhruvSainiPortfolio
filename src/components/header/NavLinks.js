import React from 'react';
import { Nav } from "react-bootstrap";

const NavLinks = (props) => {

  return (

    <Nav className="navLinks" >
     <li
        className='nav-link'><a href="#top" onClick={() => props.isMobile && props.closeMobileMenu}>about</a></li>
      <li
      
        className='nav-link'><a href="#projects" onClick={() => props.isMobile && props.closeMobileMenu}>projects</a></li>
      <li
      className='nav-link'><a href="#skillPage" onClick={() => props.isMobile && props.closeMobileMenu}>skills</a></li>
      <li
        className='nav-link'><a href="#workEx" onClick={() => props.isMobile && props.closeMobileMenu}>work experience</a></li>
      <li className='social'>
        <div className='social linkedin'>
          <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://www.linkedin.com/in/saini-dhruv/" title="Connect with me on Linkedin" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
        </div>
        <div className='social github'>
          <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://github.com/dhruvsaini1997" title="Follow me on GitHub" target="_blank" rel="noreferrer">
              <i className="fab fa-github icon"></i>
            </a>
          </li>
        </div></li>
    </Nav>
  )
}

export default NavLinks