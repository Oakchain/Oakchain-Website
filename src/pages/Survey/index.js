import React from "react";
import Layout from "../../Layout";
import "../../assets/style/survey.css";
import blue_hand_img from "../../assets/images/hand-blue-extract.svg";

const Survey = () => {
  return (
    <Layout hideFooter>
      <main className="oak-survey">
        <div className="oak-container-fluid">
          <div className="bg-img">
            <img
              src={blue_hand_img}
              alt="blue hand holding the world illustration"
            />
          </div>
          <div className="oak-survey-fluid">
            <div className="oak-survey-text-container">
              <div className="text-align-right">
                <p className="oak-survey-text-top">Reward : XP Oaknut</p>
              </div>
              <div className="oak-survey-text-main">
                <h3>We want YOUR insights! 🧠</h3>
                <p>
                  Join our user research today and shape the future of education
                  together. Click, engage, and let your voice be the key to
                  unlocking Oakchain's full potential!
                </p>
              </div>
            </div>

            <div className="oak-survey-action-container">
              <p>What best describes you?</p>
              <div className="oak-survey-action">
                <button className="oak-btn-secondary btn">
                  <a href="#" target="_blank">
                    Educator
                  </a>
                </button>
                <button className="oak-btn-secondary btn">
                  <a href="#" target="_blank">
                    Learner
                  </a>
                </button>
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

export default Survey;