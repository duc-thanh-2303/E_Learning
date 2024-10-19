import React from 'react'
import fr1 from '../assets/Frame 5.png'
import fr2 from '../assets/Frame 6.png'
import fr3 from '../assets/Frame 7.png'
import fr4 from '../assets/Group 52.png'
import fr13 from '../assets/Group 69.png'
import '../styles/Hero.css'


const Hero = () => {
  return (
    <div className='hero_section'>
      <div className='hero_section-context'>
        <p className='hero_heading'>
          Develop your <br />
          skills in a new<br />
          and unique way
        </p>
        <p className='hero_subheading'>
          Explore a transformative approach to skill development on our online <br />
          learning platform. Uncover a new realm of learning experience and <br />
          elevate your experience on unique ways
        </p>
        <div className='hero_cta-btn'>
          <button>Enroll Now</button>
          <button>
            <img src={fr13} alt='video' />
            What's Etech?
          </button>
        </div>
      </div>
      <div className='hero_section-bg'>
        <img src={fr4} alt='' />
        <img src={fr1} alt='' />
        <img src={fr2} alt='' />
        <img src={fr3} alt='' />
      </div>
    </div>
  )
}

export default Hero
