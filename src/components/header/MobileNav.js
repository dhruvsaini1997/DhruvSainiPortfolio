import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { HiMenu } from 'react-icons/hi'

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hambugerIcon = <HiMenu className='hamburgerIcon'
    onClick={() => setOpen(!open)}>
  </HiMenu>

  const closeIcon = <HiMenu className='closeIcon' style={{ color: "grey" }}
    onClick={() => setOpen(!open)}>
  </HiMenu>

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className='mobileNav row'>
      <h1 className='mobileTitle'>Dhruv Saini</h1>

      {open ? closeIcon : hambugerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileNav