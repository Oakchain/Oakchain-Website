import React, {useEffect, useState} from "react";
import "./style.css";
import Post from "./Post";
import PostList from "./PostList";
import axios from "axios";

// const _postData = [
//   { id: 1, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 2, poster: "DegenPoet", type: "Article", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 3, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 4, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 5, poster: "DegenPoet", type: "Article", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 6, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 1, poster: "DegenPoet", type: "Article", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 2, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 3, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 4, poster: "DegenPoet", type: "Article", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 5, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." },
//   { id: 6, poster: "DegenPoet", type: "Post", content: "At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered and diverse community is essential for the sustainable growth of the Web3 ecosystem..." }
// ];
//
// const singlePost = [{
//   content: "<p>ComposeDB on Ceramic is a decentralized, composable graph database that empowers developers to store and interact with their application data efficiently and swiftly. By integrating Ceramic infrastructure with an indexer, reusable data models, and GraphQL, ComposeDB paves the way for the creation of truly interoperable and composable Web3 applications.</p><p>The core Ceramic team recently unveiled a new CLI tool named&nbsp;<a href=\"https://developers.ceramic.network/docs/wheel/wheel-reference?ref=blog.ceramic.network\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--ghost-accent-color); background-color: transparent;\">Wheel</a>. This tool simplifies the process of running Ceramic nodes locally. Moreover, it incorporates a straightforward Web3 social application that developers can utilize to interact with ComposeDB on Ceramic, or even leverage it as a foundation for their unique projects. This tutorial will guide you through using Wheel and the embedded example Web3 social application, enabling you to engage with ComposeDB on Ceramic in a matter of minutes.</p><p>By adhering to this guide, you will accomplish the following:</p><ol><li>Configure your development environment</li><li>Run a local Ceramic node</li><li>Operate a fully functional example dApp on your local machine</li><li>Understand the subsequent steps to continue building on Ceramic</li></ol><p>If you'd like a visual walkthrough, check out this video that illustrates all of the setup steps written below:</p><iframe class=\"ql-video\" frameborder=\"0\" allowfullscreen=\"true\" src=\"https://www.youtube.com/embed/r68FXBTCBZ4?feature=oembed\"></iframe><p><br></p><h1><strong>Requirements</strong></h1><p>For this tutorial, ensure you have the following tools and resources installed on your system:</p><ul><li>A code editor that suits your preferences (for example, VSCode)</li><li>A web browser that you're comfortable with (we'll be using Chrome for this guide)</li><li><a href=\"https://nodejs.org/en?ref=blog.ceramic.network\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--ghost-accent-color); background-color: transparent;\">Node.js v16</a>&nbsp;or a newer version</li><li><a href=\"https://stedolan.github.io/jq/download/?ref=blog.ceramic.network\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--ghost-accent-color); background-color: transparent;\">jq</a></li></ul><p>After you've installed the necessary dependencies and prepped your development tools as outlined above, you can dive into setting up your work environment with Wheel.</p>\n"
// }]

const oakBaseUrl = "https://api.oakchain.io";
const accessToken = localStorage.getItem('token');

const Posts = ({view}) => {
  const [postData, setPostData] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${oakBaseUrl}/api/blog?limit=10&page=0`);
      const res = response.data;
      const allPosts = res.data.blogPosts;

      setPostData(allPosts);
      console.log(allPosts)

    } catch (error) {
      console.error("Error fetching posts:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      {postData.map(post => (
        view === 'grid' ? <Post key={post.id} poster={post.authorName} type={post.type} content={post.content} /> : <PostList key={post.id} poster={post.authorName} type={post.type} content={post.content} />
      ))}
    </div>
  );
};

export default Posts;
