import React, { useState} from "react";
import "../../assets/style/home_page.css";
import ImageIcon from "../../assets/images/imageIcon.svg";
import emojiIcon from "../../assets/images/emojiIcon.svg";
import gifIcon from "../../assets/images/gifIcon.svg";
import tagIcon from "../../assets/images/tagIcon.svg";

const Usermodal = ({ show, onClose }) => {
  const [isInputFocused, setInputFocused] = useState(false);
  const [showButtonText, setShowButtonText] = useState(false);
  const [preventBlur, setPreventBlur] = useState(false);


    if (!show) return null;

  return (
    <>
      <div className="modal-overlay"></div>
      <article className="userModal">
        <div className="userModalContainer">
          <div className="userModal-container_name">
            <span className="userModal-container_nameIcon">
                P
            </span>
        
            <p className="userModal-text">Patrick James</p>
    
          </div>
          <p onClick={onClose} className="userModal-modalCloser">&times;</p>
        </div>


        <textarea className="userModal-textArea" placeholder="What's happening..."></textarea>

        <div className="userModal-buttons">
            <div className="userModal-icons">
                <div className="userModal-icon">
                    <img src = {ImageIcon} alt="an-img-icon"/>
                </div>
                <div className="userModal-icon">
                    <img src = {emojiIcon} alt="an-emoji-icon"/>
                </div>
                <div className="userModal-icon">
                    <img src = {gifIcon} alt="a-gif-icon"/>
                </div>


                <div className={isInputFocused ? "userModal-tag input-focused" : "userModal-tag"}>
                <span className="userModal-tagIcon">
                <img src = {tagIcon} alt="an-img-icon"/>
                </span>

            
                <input className="userModal-input" placeholder="Eg:Bitcoin"  
             onFocus={() => {
              setInputFocused(true);
              setShowButtonText(true);
            }}
            onBlur={() => {
              if (!preventBlur) {
                setInputFocused(false);
                setShowButtonText(false);
              }
            }}/>

<button 
  className="userModal-button"
  onMouseDown={() => {
    setPreventBlur(true);
    setTimeout(() => {
      setPreventBlur(false);
    }, 10);
  }}
  onClick={() => {
   console.log("hello");
  }}
>
  {showButtonText ? 'Enter' : ''}
</button>


                </div>
            </div>
            <button className="userModal-pushButton">
                Push
            </button>
        </div>
      </article>
    </>
  );
};

export default Usermodal;
