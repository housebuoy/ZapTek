import React from 'react'
import './Header.css'
import DropdownMenu from './DropdownMenu'

const Header = () => {
  return (
    <div className='Header'>
        <div className="logo">
            <img src="./images/Logo.svg" alt="logoImg" />
            <h2>Donaty</h2>
        </div>
        <nav>
          <DropdownMenu />     
          <a href="">Our Campaign</a>
          <a href="">News</a>
          <a href="">Contact Us</a>
          <a href=""><button>Donate Now <span><box-icon name='heart' type='solid' color='#9f5ffe' ></box-icon></span></button></a>
        </nav>
    </div>
  )
}

export default Header