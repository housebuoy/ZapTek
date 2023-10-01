import React from 'react'
import './Footer.css'
import 'boxicons'

const Footer = () => {
  return (
    <footer className="Footer">
       <div className="FooterHead">
            <div className="FooterHeadLogo">
                <div className="FooterLogo">
                    <img src="./images/Logo.svg" alt="Logo" />
                    <h2>Donaty</h2>
                </div>
                <p>Whatever it is that you care about, there will be a charity working on it. Charities help in lots of different ways</p>
                <div className="socialLinks">
                    <a href=""><box-icon name='youtube' type='logo' color='#1AD0D1' ></box-icon></a>
                    <a href=""><box-icon name='facebook' type='logo' color='#1AD0D1' ></box-icon></a>
                    <a href=""><box-icon name='instagram' type='logo' color='#1AD0D1' ></box-icon></a>
                    <a href=""><box-icon name='twitter' type='logo' color='#1AD0D1' ></box-icon></a>
                </div>
            </div>
            <div className="Menu">
                <h2>Menu</h2>
                <a href="">Donations</a>
                <a href="">Features</a>
                <a href="">Categories</a>
                <a href="">Volunteer</a>
                <a href="">About Us</a>
            </div>
            <div className="AboutUs">
                <h2>About Us</h2>
                <a href="">How it work?</a>
                <a href="">Contact Us</a>
                <a href="">FAQ</a>
                <a href="">Help</a>
            </div>
            <div className="Contact">
                <h3>Contact Info</h3>
                <div className="image-info">
                    <div className="image">
                        <box-icon name='phone' type='solid' color='#ffffff' ></box-icon>
                    </div>
                    <div className="info">
                        <h3>Call Us</h3>
                        <p>+1-206-156 2849</p>
                    </div>
                </div>
                <div className="image-info">
                    <div className="image">
                        <box-icon name='envelope' type='solid' color='#ffffff' ></box-icon>
                    </div>
                    <div className="info">
                        <h3>Mail Us</h3>
                        <p>info@donaty.com</p>
                    </div>
                </div>
                <div className="image-info">
                    <div className="image">
                    <box-icon name='map' type='solid' color='#ffffff' ></box-icon>
                    </div>
                    <div className="info">
                        <h3>Visit Us</h3>
                        <p> Your Address here</p>
                    </div>
                </div>
            </div>
        </div> 
       <div className="FooterLine">
        <p>Donaty © 2023 Ideapeel Inc. All Rights Reserved.</p>
       </div>
    </footer>
  )
}

export default Footer