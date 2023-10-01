import React from 'react'
import './WhoWeAre.css'

const WhoWeAre = () => {
    
  return (
    <section className="WhoWeAre">
        <div className="imageTab">
            <div className="biggerImage">
            <img src="./images/biggerImg.svg" alt="" />
            </div>
            <div className="smallerImage">
            <img src="./images/smallerImg.svg" alt="" />
            </div>
        </div>
        <div className="textArea">
            <h3>Who We Are</h3>
            <h1>We're Non-Profit Charity & NGO Organization</h1>
            <p>Join us and make your life more valuable and useful, be a part of us and contribute to the nation and state and the simplest for the environment and yourself</p>
            <div className="textList">
            <div className="List">
                <img src="./images/circleCheck.svg" alt="check" />
                <p>Support in extreme need</p>
            </div>
            <div className="List">
                <img src="./images/circleCheck.svg" alt="check" />
                <p>Largest global crowdfunding community</p>
            </div>
            <div className="List">
                <img src="./images/circleCheck.svg" alt="check" />
                <p>Make the world a better place</p>
            </div>
            <div className="List">
                <img src="./images/circleCheck.svg" alt="check" />
                <p>Share your love for community</p>
            </div>
        </div>
        <button>About Us</button>
        </div>
    </section>
  )
}

export default WhoWeAre