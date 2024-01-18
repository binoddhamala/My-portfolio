import React from 'react'
import data from "../../Data/index.json"; 

const MyPortfolio = () => {
  return (
    <section className="portfolio--section" id="MyPortfolio">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Photo" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a className="text-sm portfolio--link" href={item.link}>
               click here...
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyPortfolio