import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Hero.scss'

const Hero = () => {
  const {hero} = useSelector(state => state.hero);


  
  return (
    <div>
        <div className="hero card">
        <h1>MY PROFILE</h1>
          {hero.map((item, index) => {
            
            return (
              <div key={index}>
              
              <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.adress}</p>
                <p>{item.city}</p>
                <a href={"mailto:" + item.email}>
                tony@starkindustries.com
                </a>
                <p>{item.birthDate}</p>
                <p>{item.phone}</p>
                 <p><a href={hero.gitHub}>
              GitHub
            </a></p>
                <div>
 
                  <Link to={`/editHero/${index}`}><button>EDIT</button></Link>
                
                </div>
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Hero