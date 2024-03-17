import React from "react";
import "./style.css";
import dpdemo from "../../../assets/images/dpdemo.png";
import upvote from "../../../assets/images/upvote.png";
import bookmark from "../../../assets/images/bookmark.png";
import share from "../../../assets/images/share.png";
import { Link } from "react-router-dom";
import { usePostContext } from "../../../App";

const Post = ({poster, type, content}) => {
  const { setPost } = usePostContext();

  const handleSeeMore = () => {
    setPost({poster, content});
  };

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
          {content?.match(/<p>(.*?)<\/p>/g)?.[0].slice(3, -4) ?? content}
        <Link to="/more" className="see-more" onClick={handleSeeMore}>See more</Link>
      </p>
      <div className="img-demo mobile"><img></img></div>
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
