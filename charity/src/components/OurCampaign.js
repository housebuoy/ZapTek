import React from 'react'
import './OurCampaign.css'
import ProgressBar from './ProgressBar'


const OurCampaign = () => {
  return (
    <section className="OurCampaign">
        <div className="OurCampaignText">
            <h3>Our Campaign</h3>
            <h1>Giving Help To Those Who Need It</h1>
            <div className="OurCampaignDonations">
                <div className="Donations">
                    <img src="./images/OurCampaign3.svg" alt="" />
                    <p>massive invasion of Palestine, war in the Gaza strip</p>
                    <div className="progressDisplay">
                        <p>$5,200</p>
                        <span><p>$10,400</p></span>
                    </div>
                    <div className="progressBar">
                        <ProgressBar />
                    </div>
                    <div className="Buttons">
                        <button>Donate now</button>
                        <span><button>See detail</button></span>
                    </div>
                </div>
                <div className="Donations">
                    <img src="./images/OurCampaign1.svg" alt="" />
                    <p>Food, water and medicine for shelter on the Dnieper</p>
                    <div className="progressDisplay">
                        <p>$5,200</p>
                        <span><p>$10,400</p></span>
                    </div>
                    <div className="progressBar">
                        <ProgressBar />
                    </div>
                    <div className="Buttons">
                        <button>Donate now</button>
                        <span><button>See detail</button></span>
                    </div>
                </div>
                <div className="Donations">
                    <img src="./images/OurCampaign2.svg" alt="" />
                    <p>massive invasion of Palestine, war in the Gaza strip</p>
                    <div className="progressDisplay">
                        <p>$5,200</p>
                        <span><p>$10,400</p></span>
                    </div>
                    <div className="progressBar">
                        <ProgressBar />
                    </div>
                    <div className="Buttons">
                        <button>Donate now</button>
                        <span><button>See detail</button></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurCampaign