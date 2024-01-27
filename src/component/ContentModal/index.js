import React, { useState, useEffect } from "react";
import { Modal } from "reactstrap";
import bold from "../../assets/images/bold.svg";
import italic from "../../assets/images/italic.svg";
import underline from "../../assets/images/underline.svg";
import ul from "../../assets/images/ul.svg";
import ol from "../../assets/images/ol.svg";
import link from "../../assets/images/link.svg";
import gallery from "../../assets/images/gallery.svg";
import axios from "axios";
import "./index.css";
import { set } from "lodash";
import { toast } from "react-toastify";
const ContentModal = ({ isOpen, toggle, setIsOpen, editPostData, updatePost }) => {
  const [section, setSection] = useState("scan-page");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editPostData) {
      setTitle(editPostData.title || "");
      setContent(editPostData.content || "");
    }
  }, [editPostData]);

  const data = {
    title,
    description: "",
    image: {
      0: "",
      1: "",
    },
    content,
  };

  const oakBaseUrl = "https://api.oakchain.io";


  const publish = async () => {
    const oakToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ha0BnbWFpbC5jb20iLCJpYXQiOjE3MDYzNzg1NjgsImV4cCI6MTcwNjU1MTM2OH0.YcAnJUO5-lSucXbuDWvwLHO1X-ZOXMBX7AAyrR8p_I4"
    
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${oakToken}`,
    };

    setLoading(true);

    try {
      if (editPostData) {
        await updatePost(editPostData.id, {
          title,
          description: "",
          image: {
            0: "",
            1: "",
          },
          content,
        });
      } else {
        const response = await axios.post(`${oakBaseUrl}/api/blog`, data, {
          headers,
        });
        const res = response.data;
        console.log(res.data);
        toast.success(res.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setTitle("");
    setContent("");
    setIsOpen(false);
    setLoading(false);
  };


  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      className="adminCreateContent modal-dialog-centered"
      modalClassName="oak-modal__card"
      title={title}
      content={content}
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
          <h1 className="hh1">{loading ? (editPostData ? "Updating..." : "Publishing") : (editPostData ? "Update" : "Publish")}</h1>
        </button>
      </div>
    </Modal>
  );
};

export default ContentModal;
