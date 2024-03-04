import AuthGuard from "../../Layout/AuthGuard";
import React, { useState } from "react";
import "./index.css";
import bannerImg from "../../assets/images/hand-banner.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import { Trending } from "../../component/News";
import { Banner as AcademyBanner } from "../../component/Academy";
import { FuturePodcast } from "../../component/Podcast";
import Tasks from "../../component/Tasks";
import { Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import oakwriter from "../../../src/assets/images/oakwriter.svg";
import PostModal from "../../component/PostModal";
import Category from "./components/Category";

const Home = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AuthGuard>
      <div className=" ">
        <PostModal toggle={toggleModal} isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className=" oak-container-fluid oak-home-banner d-flex position-relative oak-mb">
          <div className="oak-banner__text-wrapper">
            <h3 className="oak-banner-header mb-4">LOREM IPSUM</h3>
            <p className="oak-banner-sub-text">
              Porro odio voluptatum dolorem alias debitis nesciunt, atque
              mollitia officiis exercitationem? Error?
            </p>
          </div>
          {/* <div className="position-absolute oak-home__banner-img ">
            <img src={bannerImg} alt="banner-img" />
          </div> */}
        </div>

        <div className="mid">
          <h3 className="mid-text">One stop platform for everything web3</h3>
          <div className="buttons">
            <button className="button">Get started</button>
            <button className="button">Learn more</button>
          </div>
        </div>

        <div>
          <Category />
        </div>

        <section>
          <div>
            <h4>Featured</h4>
            <p>Contents here are upvoted by the community</p>
          </div>

          <div>
            <Posts />
          </div>
        </section>

        {/* <img onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdT3kMs5Dk0XqGFExS9k68u3y3Yf_W5eTnLOqkCcBJr3lvcxQ/viewform'; }}
 src={oakwriter} alt="oakwriter" className="oakWriter"/> */}

        <img
          onClick={toggleModal}
          src={oakwriter}
          alt="oakwriter"
          className="oakWriter"
        />
      </div>
    </AuthGuard>
  );
};

export default Home;
