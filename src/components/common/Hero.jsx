import React from 'react'

const Hero = () => (
  <div className="Hero">
    <div className="Hero-content">
      <div className="Hero-items">
        <div className="Hero-item">
          <figure>
            <img
              src="https://arepa.s3.amazonaws.com/platzi-logo.webp"
              alt="Platzi"
            />
          </figure>
          <div className="Hero-title">
            <a href="https://platzi.com/teachers/gndx/">
              <span>Platzi</span>
              <h2>Oscar Barajas</h2>
            </a>
            <p>Jueves 8PM</p>
          </div>
        </div>
        <div className="Hero-item">
          <figure>
            <img src="https://arepa.s3.amazonaws.com/youtube.png" alt="Youtube" />
          </figure>
          <div className="Hero-title">
            <a
              href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw?sub_confirmation=1"
            >
              <span>Youtube</span>
              <h2>Oscar Barajas</h2>
            </a>
            <p>Viernes 9PM</p>
          </div>
        </div>
        <div className="Hero-item">
          <figure>
            <img
              src="https://arepa.s3.amazonaws.com/app-icons-twitch.png"
              alt="Twitch"
            />
          </figure>
          <div className="Hero-title">
            <a href="https://twitch.tv/gndxdev">
              <span>Twitch</span>
              <h2>gndxdev</h2>
            </a>
            <p>Domingos 6PM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero