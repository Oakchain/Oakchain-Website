import React from "react";
import Layout from "../../Layout";
import "../../assets/style/survey.css";
import "../../assets/style/coming-soon.css";
import blue_hand_img from "../../assets/images/hand-blue-extract.svg";
import worker from "../../assets/images/construction.svg";
import near_icon from "../../assets/images/Near.svg";

const ComingSoon2 = () => {
  return (
    <Layout hideFooter>
      <main className="oak-survey coming-soon">
        <div className="oak-container-fluid">
          <div className="bg-img">
            <img
              src={blue_hand_img}
              alt="blue hand holding the world illustration"
            />
          </div>
          <div className="oak-survey-fluid">
            <div className="oak-survey-text-container">
              <div className="oak-survey-text-main">
                <p>Devs at work.</p>
                <h3>COMING SOON!</h3>
                <p>on</p>
                <img src={near_icon} alt="" className="near-icon" />
                <p>NEAR</p>
              </div>
              <img src={worker} alt="" className="worker-img" />
            </div>

            <div className="oak-survey-action-container">
              <p className="oak-cta-text">
                Be among the first to know when we go Live.
              </p>
              <div className="oak-cta-form">
                <input type="text" placeholder="Enter your email" />
                <button className="oak-btn-secondary btn">Subscribe</button>
              </div>
            </div>

            <footer>
              <div className="socials">
                <a
                  href="https://twitter.com/oakchain_io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
                    alt="twitter"
                  />
                </a>
                <a
                  href="https://www.instagram.com/oakchain_io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
                    alt="instagram"
                  />
                </a>
              </div>
              <p>All right reserved. Designed with by Oakchain. </p>
            </footer>
          </div>{" "}
        </div>
      </main>
    </Layout>
  );
};

export default ComingSoon2;
