import React from 'react'
import './Tagline.css'

const Tagline = () => {
  return (
    <section className="Tag">
        <div className="tag">
            <div className="tagText">
                <h3>Act Now for A Better World</h3>
                <h1>Solutions to Help People in Need and Save the Planet</h1>
            </div>
            <button>Donate Now
                <box-icon name='heart' type='solid' color='#ffffff' ></box-icon>
            </button>
        </div>
        <div className="tagLine">
            <div className="TestimonialTag">
                <h2>20M</h2>
                <div></div>
                <h4>Number of Supporters</h4>
            </div>
            <div className="TestimonialTag">
                <h2>15K+</h2>
                <div></div>
                <h4>Volunteers Worldwide</h4>
            </div>
            <div className="TestimonialTag">
                <h2>68K+</h2>
                <div></div>
                <h4>We've Helped Raise</h4>
            </div>
            <div className="TestimonialTag">
                <h2>10M+</h2>
                <div></div>
                <h4>Projects Funded</h4>
            </div>
        </div>
       </section>
  )
}

export default Tagline