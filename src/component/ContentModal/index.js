import React, { useState } from "react";
import { Modal } from "reactstrap";
import bold from "../../assets/images/bold.svg";
import italic from "../../assets/images/italic.svg";
import underline from "../../assets/images/underline.svg";
import ul from "../../assets/images/ul.svg";
import ol from "../../assets/images/ol.svg";
import link from "../../assets/images/link.svg";
import gallery from "../../assets/images/gallery.svg";
import "./index.css";
import { set } from "lodash";
const ContentModal = ({ isOpen, toggle }) => {
  const [section, setSection] = useState("scan-page");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const data = {
    title,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: {
      0: "https://example.com/header.jpg",
      1: "https://example.com/body11.jpg",
    },
    content,
  };

  const publish = async () => {
    const oakBaseUrl = "http://18.134.208.237:5000";
    const oakToken = process.env.OAK_API_TOKEN;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${oakToken}`,
      },
      body: JSON.stringify(data),
      redirect: "follow",
    };

    try {
      const response = await fetch(`${oakBaseUrl}/api/blog`, requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="adminCreateContent modal-dialog-centered"
      modalClassName="oak-modal__card"
    >
      <div className="contentInput">
        <input
          className="inp"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className="contentText">
        <textarea
          className="texta"
          placeholder="Enter article text here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="contentBottom">
        <div className="conTainBot">
          <img src={bold} alt="bold"></img>
          <img src={italic} alt="italic"></img>
          <img src={underline} alt="underline"></img>
          <img src={ul} alt="ul"></img>
          <img src={ol} alt="ol"></img>
          <img src={link} alt="link"></img>
          <img src={gallery} alt="gallery"></img>
        </div>
        <button className="publishBtn" onClick={publish}>
          <h1 className="hh1">Publish</h1>
        </button>
      </div>
    </Modal>
  );
};

export default ContentModal;
