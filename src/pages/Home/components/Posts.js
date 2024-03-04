import React from "react";
import "./style.css";
import Post from "./Post";
import PostList from "./PostList";

const postData = [
  { id: 1, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
  { id: 2, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
  { id: 3, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
  { id: 4, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
  { id: 5, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
  { id: 6, poster: "DegenPoet", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." }
];

const Posts = () => {
  return (
    <div className="posts">
      {postData.map(post => (
        <Post key={post.id} poster={post.poster} content={post.content} />
        // <PostList key={post.id} poster={post.poster} content={post.content} />
      ))}
    </div>
  );
};

export default Posts;
