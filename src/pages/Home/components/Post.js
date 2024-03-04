import React from "react";
import "./style.css";
import dpdemo from "../../../assets/images/dpdemo.png";
import upvote from "../../../assets/images/share.svg";
import bookmark from "../../../assets/images/share.svg";
import share from "../../../assets/images/share.svg";

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="poster">
          <img src={dpdemo} alt="" />
          <h6>DegenPoet</h6>
        </div>
        <button className="p-button">Post</button>
      </div>
      <p className="post-text">
        At Oak, our mission is to facilitate the adoption of Web3 technology by
        providing accessible education, fostering skill development, and
        bridging the gap between talent and opportunity. We believe that a
        well-rounded, empowered and diverse community is essential for the
        sustainable growth of the Web3 ecosystem...{" "}
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
