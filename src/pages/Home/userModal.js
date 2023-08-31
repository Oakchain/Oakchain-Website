import React from "react";
import "../../assets/style/home_page.css";

const Usermodal = ({ show, onClose }) => {
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
            <p>Patrick James</p>
          </div>
          <p onClick={onClose}>&times;</p>
        </div>
      </article>
    </>
  );
};

export default Usermodal;
