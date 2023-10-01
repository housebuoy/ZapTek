import React from 'react'
import './LatestNews.css'

const LatestNews = () => {
  return (
    <section className="LatestNews">
        <h3>Latest News</h3>
        <div className="head">
            <h1>Latest Articles</h1>
            <button>All News</button>
        </div>
        <div className="newsGrids">
            <div className="newsGrid">
                <img src="./images/mask1.svg" alt="" />
                <h2>Bring together people who care about a cause</h2>
                <div className="barShadeDiv">
                    <div className="barShade"></div>
                </div>
                <p>15 Feb, 2023</p>
            </div>
            <div className="newsGrid">
                <img src="./images/mask2.svg" alt="" />
                <h2>Together people who care about a cause</h2>
                <div className="barShadeDiv">
                    <div className="barShade"></div>
                </div>
                <p>10 Feb, 2023</p>
            </div>
            <div className="newsGrid">
                <img src="./images/mask.svg" alt="" />
                <h2>People who care about a cause</h2>
                <div className="barShadeDiv">
                    <div className="barShade"></div>
                </div>
                <p>7 Feb, 2023</p>
            </div>
        </div>
        <div className="NewsLetter">
            <div className="NewsText">
                <h1>Newsletter</h1>
                <p>Bring together people who care about a cause</p>
            </div>
            <div className="NewsLetterForm">
            <form action="">
                    <input type="text" placeholder='Your Email'/>
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default LatestNews