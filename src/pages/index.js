import React from "react";
import "../assets/style/home.css";
import Layout from "../Layout";
import discord from "../assets/images/discord.svg";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import reddit from "../assets/images/reddit.svg";
import s1 from "../assets/images/s1.svg";
import s2 from "../assets/images/s2.svg";
import p1 from "../assets/images/p1.svg";
import p2 from "../assets/images/p2.svg";
import p3 from "../assets/images/p3.svg";
import p4 from "../assets/images/p4.svg";
import feat1 from "../assets/images/feat1.png";
import feat2 from "../assets/images/feat2.png";
import feat3 from "../assets/images/feat3.png";
import polygon from "../assets/images/polygon.png";
import logo from "../assets/images/logoLatest.png";
import googleCloud from "../assets/images/googleCloud.png";
import googleEyes from "../assets/images/googleEyes.png";

// import connectWallet from '../utils/walletConnect'

const LandingPage = () => {
  const myDate = new Date();
  const month = myDate.toLocaleString("default", { month: "long" });
  const day = String(myDate.getDay()).padStart(2, 0);
  const year = myDate.getFullYear();
  const mins = myDate.getMinutes();

  console.log(mins);
  const date = `${month} ${day}, ${year}.${mins} mins read`;

  return (
    <Layout>
      <div className="oak-hero__wrapper ">
        <div className="hero-cta__wrapper d-flex align-items-center oak-container-fluid">
          <div className="hero-cta__cointainer">
            <div className="d-flex">
              <div className="oak-socials-hero__wrapper">
                <div>
                  <div className="oak-social-hero_wrapper">
                    <img src={discord} alt="icon" />
                  </div>
                  <div className="oak-social-hero_wrapper">
                    <img src={twitter} alt="icon" />
                  </div>
                  <div className="oak-social-hero_wrapper">
                    <img src={telegram} alt="icon" />
                  </div>
                  <div className="oak-social-hero_wrapper last-child">
                    <img src={reddit} alt="icon" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="oak-hero-text">
                  Step into the future with Web3
                </h3>
                <h3 className="oak-hero-header">
                  Unlocking a new world of learning and possibilities!
                </h3>
                <p className="oak-hero-sub-text">
                  Learning about Web3 is not only important for staying current
                  with technological advancements, but it also offers exciting
                  opportunities for innovation and growth in various industries.
                </p>
                <button className="btn oak-btn mb-5">Get Started</button>

                <div className="oak-newsletter__wrapper d-flex align-items-center mb-3">
                  <input
                    className="oak-newsletter-input "
                    placeholder="Enter your email"
                  />
                  <button className="oak-btn-secondary btn">Subscribe</button>
                </div>
                <p className="oak-hero-subscribe-text">
                  Join our newsletter and be the first to know about the latest
                  trends and innovations in the web3, blockchain,
                  cryptocurrencies, and digital space.
                </p>
              </div>
            </div>
          </div>

          {/* <div className='hero-bg-img__wrapper'>

          </div> */}
        </div>
      </div>
      <section className="oak-container-fluid py-3">
        <div className="d-flex align-items-center justify-content-center">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Our Partners
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="d-flex align-items-center justify-content-around oak-partners__wrapper mt-4 mb-5">
          <div className="">
            <img src={p1} alt="icon" />
          </div>
          <div className="">
            <img src={p2} alt="icon" />
          </div>
          <div className="">
            <img src={p3} alt="icon" />
          </div>
          <div className="">
            <img src={p4} alt="icon" />
          </div>
        </div>
      </section>

      <section className="oak-container-fluid mb-4">
        <p className="oak-section__subheading mb-0">
          Our operation across the platform
          <span className="px-3">
            <img src={s2} alt="icon" />
          </span>
        </p>
        <h3 className="oak-section__head mb-4">
          We have the best strategy and the best process
        </h3>
        <button className="btn oak-btn ">Get Started</button>
      </section>

      <section className="oak-container-fluid ">
        <div className="d-flex align-items-center justify-content-center oak-features__container">
          <div className="oak-feature__wrapper d-flex justify-content-center">
            <img src={feat1} alt="icon" />
          </div>
          <div className="oak-feature__wrapper even-child d-flex justify-content-center">
            <img src={feat2} alt="icon" />
          </div>
          <div className="oak-feature__wrapper d-flex justify-content-center">
            <img src={feat3} alt="icon" />
          </div>
        </div>
      </section>
      <section className="">
        <div className="d-flex align-items-center justify-content-center news-section-header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Get Latest Web3 News
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>
      </section>

      {/* GET LATEST WEB3 NEWS */}

      <section className="oak-container-fluid ">
        <div className="  oak-getLatest__container">
          {/* Card component */}
          <div class="card" style={{ width: "400px" }}>
            <img src={polygon} class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="card-body__logo">
                <img src={logo} alt="logo" />
                <h5 class="card-title">Oak news</h5>
              </span>

              <p class="card-text">
                Polygon Labs and Google Partner to Boost Web3 Development
              </p>

              <p className="card-text__last-child">
                Learning about Web3, blockchain, and NFTs can help individuals
                understand the potential for decentralized technologies to...
              </p>

              <p className="card-time">{date}</p>
            </div>
          </div>

          <div class="card" style={{ width: "400px", }}>
            <img src={googleCloud} class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="card-body__logo">
                <img src={logo} alt="logo" />
                <h5 class="card-title">Oak news</h5>
              </span>

              <p class="card-text">
                Google Cloud broadens Web3 startup program with 11 blockchain
                firms
              </p>

              <p className="card-text__last-child">
                Learning about Web3, blockchain, and NFTs can help individuals
                understand the potential for decentralized technologies to...
              </p>

              <p className="card-time">{date}</p>
            </div>
          </div>

          <div class="card" style={{ width: "400px"}}>
            <img src={googleEyes} class="card-img-top" alt="..." />
            <div class="card-body">
              <span class="card-body__logo">
                <img src={logo} alt="logo" />
                <h5 class="card-title">Oak news</h5>
              </span>

              <p class="card-text">
                Google Cloud Expands Partnerships, Wants More Web3 Startups To
                Leverage
              </p>

              <p className="card-text__last-child">
                Learning about Web3, blockchain, and NFTs can help individuals
                understand the potential for decentralized technologies to...
              </p>

              <p className="card-time">{date}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
