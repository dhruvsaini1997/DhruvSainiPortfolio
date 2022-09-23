import React from 'react'
import MobileNav from './MobileNav'
import { WebNav } from './WebNav'

const NavigBar = () => {
  return (
    <nav className='NavigBar'>
    <MobileNav/>
    <WebNav /></nav>
  )
}

export default NavigBar