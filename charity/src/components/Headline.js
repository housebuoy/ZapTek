import React from 'react'
import './Headline.css'
import 'boxicons'

const Headline = () => {
  return (
    <div className='Headline'>
        <div className="headlineLeft">
            <div className="contactDetails">
                <span><box-icon type='solid' name='phone' color='white' className='icon'></box-icon></span>
                <p>+1-206-156 2849</p>
            </div>
            <div className="contactDetails">
            <span><box-icon name='envelope' type='solid' color='#ffffff' className='icon'></box-icon></span>                <p>info@donaty.com</p>
            </div>
        </div>
        <div className="headlineRight">
          <a href=""><box-icon type='logo' name='youtube' color='#fff'></box-icon></a>
          <a href=""><box-icon name='facebook' type='logo' color='#ffffff' ></box-icon></a>
          <a href=""><box-icon name='instagram' type='logo' color='#ffffff' ></box-icon></a>
          <a href=""><box-icon name='twitter' type='logo' color='#ffffff' ></box-icon></a>
        </div>
    </div>
  )
}

export default Headline