import React, { useState } from "react";
import "../../assets/style/home_page.css";
import writerImage from "../../assets/images/writerImg.svg";
import cautionImg from "../../assets/images/cautionIcon.svg";

const Writermodal = ({ show, onClose }) => {
  const [showSecondModal, setShowSecondModal] = useState(false);

  const startWriting = () => {
    setShowSecondModal(true);
  };

  const closeSecondModal = () => {
    setShowSecondModal(false);
    onClose();
  };



  if (!show) return null;

  return (
    <>
      <div className="oakWriter-container">
        <div className="oakWriter-imageContainer">
          <div className="oakWriter-img">
            <img src={writerImage} alt="imageOfwriter" />
          </div>
          <p className="writerBtn" onClick={onClose}>
            &times;
          </p>
        </div>
        <h3 className="oakWriter_header-text">
          Become an Oak <br /> writer
        </h3>
        <p className="oakWriter-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <p className="oakWriter_link-text">Learn more</p>
        <div className="oakWriter_button-container">
          <button className="oakWriter-btn oak-btn" onClick={startWriting}>
            Start Writing
          </button>
        </div>
      </div>

      {showSecondModal && (
        <>
          <div className="cautionModal">
            <div className="cautionContainer">
              <img src={cautionImg} alt="cautionIcon" className="cautionImg" />

              <h3 className="caution_header-text">
                Oops! Looks like you don't have any Nfts
              </h3>
              <p className="caution-text">
                To be able to write in our Community it is required you purchase
                an NFT from the poll of NFTs displayed on our Marketplace
              </p>
              <button
                className="caution-btn oak-btn"
              >
                Get Nfts
              </button>
              <p className="cautionClose" onClick={closeSecondModal}>
            &times;
          </p>
            </div>
          </div>
          <div className="overlay" onClick={closeSecondModal}></div>
        </>
      )}
    </>
  );
};

export default Writermodal;
