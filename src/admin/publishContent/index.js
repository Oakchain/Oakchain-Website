import React, { useState, useEffect, useRef } from "react";
import Admin from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import bit from "../../assets/images/bit.svg";
import "./index.css";
import axios from "axios";
import ContentModal from "../../component/ContentModal";
import { toast } from "react-toastify";

const PublishContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editPostData, setEditPostData] = useState({});


  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const oakBaseUrl = "https://api.oakchain.io";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${oakBaseUrl}/api/blog`);
        const res = response.data;
        const allPosts = res.data.blogPosts;
        const fetchedPosts = await Promise.all(
          allPosts.map(async (post) => {
            const additionalData = await fetchPost(post.id);
            return additionalData;
          })
        );
        console.log(fetchedPosts);
        setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`${oakBaseUrl}/api/blog/${id}`);
      const res = response.data;
      return res.data.blogPost;
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  const editPost = (post) => {
    setEditPostData(post);
    toggleModal();
  };

  const updatePost = async (postId, updatedData) => {
    const oakToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9ha0BnbWFpbC5jb20iLCJpYXQiOjE3MDYwMDY1NDYsImV4cCI6MTcwNjE3OTM0Nn0.cxtgq9R88uoL_9-2LkkWAvgQDGGveirZNTnXPa79GSQ";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${oakToken}`,
    };

    console.log({postId, updatedData})

    try {
      const response = await axios.put(`${oakBaseUrl}/api/blog/${postId}`, updatedData, {
        headers
      });
      console.log("Post updated successfully:", response.data);
      const res = response.data;
      console.log(res.data);
      toast.success(res.message);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };
  
  

  return (
    <Admin>
      <div className="publishContent">
        <ContentModal
          toggle={toggleModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editPostData={editPostData}
          updatePost={updatePost}
        />
        <button className="createContent" onClick={toggleModal}>
          <h1 className="h11">Create Content</h1>
        </button>
        <div className="firstCont">
          <div className="poDiv">
            <div className="div">
              <h1>Published</h1>
              <h2>65</h2>
            </div>
            <div className="div">
              <h1>Views</h1>
              <h2>65</h2>
            </div>
            <div className="div">
              <h1>Shares</h1>
              <h2>65</h2>
            </div>
            <div className="div">
              <h1>Likes</h1>
              <h2>65</h2>
            </div>
          </div>
          <div className="publDiv">
            <div className="headdd">
              <h1>All published contents</h1>
            </div>
            <div className="bodyyy">
              {posts.slice(0, 5).map((post, index) => {
                return (
                  <li key={index}>
                    <img src={bit} alt="Bitcoin"></img>
                    <div className="secPul">
                      <h1>{post.title}</h1>
                      <p>{post.content}</p>
                      <div className="secBtn">
                        <button>
                          <h1>Pin Article</h1>
                        </button>
                        <button onClick={() => editPost(post)}>
                          <h1>Edit Article</h1>
                        </button>
                        <button>
                          <h1>Delete Article</h1>
                        </button>
                      </div>
                    </div>
                    <div className="thirdPul">
                      <h1>24-5-2023</h1>
                    </div>
                  </li>
                );
              })}
            </div>
            <div className="ender">
              <button>
                <h1>See More</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="secondCont">
          <h1>Announcement</h1>
          <div className="ul">
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
            <li>
              <h1>
                Oakchain partners with Chaindeck to push Web3 adoption across
                Africa and the world at large.
              </h1>
              <h2>2-12-2023</h2>
            </li>
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default PublishContent;
