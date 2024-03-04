import React from "react";
import "./style.css";
import dpdemo from "../../../assets/images/dpdemo.png";
import upvote from "../../../assets/images/share.svg";
import bookmark from "../../../assets/images/share.svg";
import share from "../../../assets/images/share.svg";

const Post = ({poster, content}) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="poster">
          <img src={dpdemo} alt="" />
          <h6>{poster}</h6>
        </div>
        <button className="p-button">Post</button>
      </div>
      <p className="post-text">
        {content}
        <span className="see-more">See more</span>
      </p>
      <div className="post-actions">
        <div>
          <img src={upvote} alt="" />
          <p>1.5k</p>
        </div>
        <div>
          <img src={bookmark} alt="" />
          <p>1.5k</p>
        </div>
        <div>
          <img src={share} alt="" />
          <p>1.5k</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
