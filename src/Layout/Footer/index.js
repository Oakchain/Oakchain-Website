import React from "react";
import "./index.css";
import footerLogo from "../../assets/images/footerIcon.png";
import footerPhone from "../../assets/images/Call.png";
import footerMsg from "../../assets/images/Message 36.png";
import discordIcon  from "../../assets/images/footerDiscord.png";
import twitterIcon from "../../assets/images/footerTwitter.png";
import telegramIcon from "../../assets/images/footerTelegram.png";
import redditIcon from "../../assets/images/footerReddit.png";
// import upBtn from "../../assets/images/up.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <div className="logo">
          <img src={footerLogo} alt="footerLogo" className="footerLogo" />
          <p className="logo-text">
            Oakchain was established to <br/> streamline the need to make the user<br/>
            experience easy in the fast-growing <br/> space and to take this mission
            across <br/>various borders effectively.
          </p>
          <span className="icon-number iconHolder">
            <img src={footerPhone} alt="phone" className="phone" />
            <p className="number">+238 814 3789 057</p>
          </span>

          <span className="icon-number">
            <img src={footerMsg} alt="phone" className="message" />
            <p className="number">support@oak.mail.com</p>
          </span>
        </div>

        <div className="user-links">
          <h3 className="links-title">User Links</h3>
          <ul className="links">
            <li className="link"><a href="#g">Home</a></li>
            <li className="link"><a href="#g">Courses</a></li>
            <li className="link"><a href="#g">FAQs</a></li>
            <li className="link"><a href="#g">Contact us</a></li>
            <li className="link"><a href="#g">News</a></li>
          </ul>
        </div>

        <div className="join-us">
          <h3 className="join-title">Join Us</h3>
          <p className="join-text">
            Are you passionate about technology <br/>and its impact on the world? Do
            you<br/> want to be a part of a fast-growing <br/> company dedicated to
            simplifying and <br/> streamlining the digital experience for <br/> all? Then
            join the Oakchain team!
          </p>

          <button className="join-btn">Get started</button>
        </div>
      </div>

      <div className="footer-social">
        <div className="discord">
        <img className="discordIcon" alt="discord-icon" src={discordIcon} width="60%"/>
        </div>

        <div className="twitter">
        <img className="twitterIcon" alt="twitter-icon" src={twitterIcon} width="60%"/>
        </div>

        <div className="telegram">
        <img className="telegramIcon" alt="telegram-icon" src={telegramIcon} width="53%"/>
        </div>

      <div className="reddit">
      <img className="redditIcon" alt="reddit-icon" src={redditIcon} width="60%"/>
      </div>
        
        
        
      </div>

    
    </footer>
  );
};

export default Footer;
