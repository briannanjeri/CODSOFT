import React from 'react'
import './style.css'

const HeroArea = () => {
  return (
    <div className="image-container">
      <h2>welcome to Recruit M</h2>
      <div className="newsletter-form">
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <img src="/jobimage.jpg" alt="hero-pic" />
    </div>
  )
}

export default HeroArea
