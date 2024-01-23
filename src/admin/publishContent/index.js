import React, { useState, useEffect, useRef } from "react";
import Admin from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import bit from "../../assets/images/bit.svg";
import "./index.css";
import axios from "axios";
import ContentModal from "../../component/ContentModal";

const PublishContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const oakBaseUrl = "http://18.134.208.237:5000";

  useEffect(() => {
    // fetchPost();
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${oakBaseUrl}/api/blog`);
        const res = response.data;
        const allPosts = res.data.blogPosts;
        const fetchedPosts = await Promise.all(
          allPosts.map(async (post) => {
            const additionalData = await fetchPost();
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

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `${oakBaseUrl}/api/blog/65b0310b37efd4f6b7cb244b`
      );
      const res = response.data;
      return res.data.blogPost;
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  return (
    <Admin>
      <div className="publishContent">
        <ContentModal
          toggle={toggleModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
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
              {posts.map((post, index) => (
                <li key={index}>
                  <img src={bit}></img>
                  <div className="secPul">
                    <h1>{post.title}</h1>
                    <p>{post.authorId}</p>
                    <div className="secBtn">
                      <button>
                        <h1>Pin Article</h1>
                      </button>
                      <button>
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
              ))}
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
