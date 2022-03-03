import React from 'react';
import logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Site Under Construction</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_div">
        <h4>Links (WIP) </h4>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company (WIP) </h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch (WIP) </h4>
        <p>Kristoffer Amerman</p>
        <p>(XXX)-XXX-XXXX</p>
        <p>pending-domain@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>© 2021 Kristoffer Amerman. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;