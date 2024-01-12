import React from 'react'

const HeroSection = () => {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Binod</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">IT</span>{" "}
            <br />
            Engineer
          </h1>
          <p className="hero--section-description">
            I design and code beautifully simple things,
            <br /> and I love what I do.
          </p>
        </div>
        <button className="btn btn-primary">Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/Homescreen.jpg" alt="Hero Section" />
      </div>
    </section>
  )
}

export default HeroSection