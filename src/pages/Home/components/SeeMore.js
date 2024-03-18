import AuthGuard from "../../../Layout/AuthGuard";
import "./style.css";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import dpdemo from "../../../assets/images/dpdemo.png";
import upvote from "../../../assets/images/upvote.png";
import bookmark from "../../../assets/images/bookmark.png";
import share from "../../../assets/images/share.png";
import { usePostContext } from "../../../App";
import { Link } from "react-router-dom";

const SeeMore = () => {
  const { postContent } = usePostContext();
  const { poster, content } = postContent;
  console.log(postContent);
  
  return (
    <AuthGuard>
        <Link className="back" to="/home">
          <IoArrowBackCircleSharp size={44} color="var(--secondary-color)"  />
        </Link>
        <div>
        <div className="fullpost">
      <div className="post-header">
        <div className="poster">
          <img src={dpdemo} alt="" />
          <h6>{poster}</h6>
        </div>
        <button className="p-button">Post</button>
      </div>
      <p className="post-text" dangerouslySetInnerHTML={{ __html: content }}>
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
        </div>
    </AuthGuard>
  )
}

export default SeeMore;