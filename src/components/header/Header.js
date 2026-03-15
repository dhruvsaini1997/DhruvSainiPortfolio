import './Header.css';
import React from "react";
import NavigBar from './NavigBar';
import monoPic from '../../images/DhruvSainiMono.jpg'
import { BsSun, BsMoon } from 'react-icons/bs'

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <div className='header' id='top'>
      <div className='row align-items-center h-100'>
        <div className='monoCol mx-auto'>
          <a><img alt="" src={monoPic} className="headerMono" /></a>
        </div>
        <div className='col-sm mx-auto'>
          <NavigBar />
        </div>
        <div className='themeToggleCol'>
          <button className='themeToggle' onClick={toggleDarkMode} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {darkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </div>
    </div>
  );
}
