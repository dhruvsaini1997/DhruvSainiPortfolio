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
        className='nav-link'><a href="#" onClick={() => props.isMobile && props.closeMobileMenu}>contact</a></li>
      <li className='social'>
        <div className='social fb'>

         <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://www.facebook.com/dhruvsaini1997/" title="Like me on Facebook" target="_blank">
              <i className="fab fa-facebook-f icon"></i>
            </a></li>
        </div>
        <div className='social twitter' >
        <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://twitter.com/dhruvsaini1997" title="Follow me on Twitter" target="_blank">
              <i className="fab fa-twitter icon"></i>
            </a>
          </li >
        </div >
        <div className='social linkedin'>
          <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://www.linkedin.com/in/saini-dhruv/" title="Connect with me on Linkedin" target="_blank">
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
        </div>
        <div className='social insta'>
          <li
            onClick={() => props.isMobile && props.closeMobileMenu}>
            <a href="https://www.instagram.com/saini.dhruv/" title="Follow me on Instagram" target="_blank">
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
        </div></li>
    </Nav>
  )
}

export default NavLinks