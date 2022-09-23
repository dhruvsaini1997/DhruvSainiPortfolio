import './Header.css';
import React from "react";
import NavigBar from './NavigBar';


export default function Header() {

  return (

    <div className='header'>
      <div className='row align-items-center h-100'>
        <div className='monoCol  mx-auto'>
          <a><img alt="" src="DhruvSainiMono.png"
            className="headerMono"
          /> </a>
        </div><div className='col-sm  mx-auto'>
          <NavigBar /> </div>
      </div></div>


  );
}
