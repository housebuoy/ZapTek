import React from 'react'
import ProgressBar from './ProgressBar';
import './Home.css'

const Home = () => {
  return (
    <section className='Home'>
            <div className="homeLeft">
                <div className="TextArea">
                    <h3>TRUSTED CHARITY COMPANY</h3>
                    <h1>Let's Help And Make <br /> People Smile By <span>Giving</span> Of Yours</h1>
                    <p>No matter how small the donation you give will mean a lot to them, let's donate now to help fellow humans in need</p>
                    <div className="buttonSection">
                        <button>Get Started</button>
                        <span><button><img src="./images/bx-play 1.svg" alt="" /></button></span>
                    </div>
                </div>
            </div>
            <div className="homeRight">
                <div className="DonationProgress">
                    <button>Education</button>
                    <h2>Help Children Get out of Poverty & have a Future</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                    <div className="progressBar">
                        <ProgressBar />
                        <div className="donationTargets">
                            <p className='Raised'>$10,480 <span>Raised</span></p>
                            <p className='Goal'>$20,000 <span>Goal</span></p>
                        </div>
                    </div>
                    <div className="payButton">
                            <button><box-icon name='apple' type='logo' ></box-icon> Pay</button>
                            <button><img src="./images/google.svg" alt="" />Pay</button>
                        </div>
                </div>
                <div className="smallHand">
                    <img src="./images/charity.svg" alt="" />
                </div>
                <div className="smallerDiv"></div>
            </div>
    </section>
  )
}

export default Home
