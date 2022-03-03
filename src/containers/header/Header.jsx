import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Kristoffer Amerman
        </h1>
        <p>
          Welcome to my website! <br /> <br /> 
          This is a simple React app that I built for fun. My official
          portfolio is in the works :)
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Provide feedback" />
          <button type="button">Submit</button>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header;
