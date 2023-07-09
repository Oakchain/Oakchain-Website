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
import mic from "../assets/images/mic.png";
import typewriter from "../assets/images/typewriter.png";
import btc from "../assets/images/btc-clear.png";
import btcBlur from "../assets/images/btc-blur.png";
import oakvice from "../assets/images/oakDevices.png";

// import connectWallet from '../utils/walletConnect'

const LandingPage = () => {
  const myDate = new Date();
  const month = myDate.toLocaleString("default", { month: "long" });
  const day = String(myDate.getDay()).padStart(2, 0);
  const year = myDate.getFullYear();
  const mins = myDate.getMinutes();

  console.log(mins);
  const date = `${month} ${day}, ${year}. ${mins} mins read`;

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

          <div class="card" style={{ width: "400px" }}>
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

          <div class="card" style={{ width: "400px" }}>
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

        <p className="oak-seeMore">See more</p>
      </section>

      {/* Podcast section */}
      <section className="podcast-section">
        <div className=" align-items-center podcast-section-header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Listen to Web3 Podcasts
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="oak-podcast__container">
          <img src={mic} alt="podcast" className="podcast-img" />

          <div className="oak-podcast__text">
            <h2 className="podcast-text">
              Unlocking the Future:
              <br /> Exploring the Possibilities of <br />
              Web3 on Our Podcast
            </h2>

            <p className="podcast-text-p">
              Ready to explore the revolutionary world of Web3? Our podcast has
              got you covered! Join us as we dive into the exciting
              possibilities of decentralized technology, blockchain, and beyond.
              Tune in now and unlock the future of the internet!
            </p>

            <button className="btn oak-btn">Learn more</button>
          </div>
        </div>

        {/* nest nft */}
      </section>

      <section className="nest-section">
        <div className="d-flex align-items-center justify-content-center nest-section-header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Browse our NFT collection
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="oak-nest__container">
          <div className="oak-nest__text">
            <h1 className="nest-text">
              Keep tabs on your Oaks
              <br /> Nest NFT
            </h1>
            <p>
              Ready to dive into the world of NFTs and explore the endless
              possibilities of buying and selling unique digital assets? Join us
              on this thrilling journey as we discover the vibrant world of
              non-fungible tokens and unlock the potential of blockchain
              technology. Don't miss out on this exciting opportunity to own a
              piece of digital history!
            </p>

            <button className="btn oak-btn">Buy now</button>
          </div>
          <div className="oak-nest__img"></div>
        </div>
      </section>

      {/* OAK WRITER SECTION */}

      <section className="writer-section__header">
        <div className="d-flex align-items-center justify-content-center writer-section-header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Become an Oak writer
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="oak-writer__container">
          <img className="writer-img" src={typewriter} alt="typewriter" />

          <div className="writer-text">
            <h2>
              Come Onboard become an <br /> Oak writer and earn <br /> rewards
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus purus consequat
              cursus iaculis in nulla. Et nascetur vulputate leo ut. Euismod
              vehicula tincidunt quis nec. Tristique donec ipsum non leo a
              euismod viverra. Risus molestie a tincidunt sed. At id consectetur
              sit a metus urna mattis. Eu nibh.
            </p>
            <button className="btn oak-btn">Learn more</button>
          </div>
        </div>
      </section>

      {/* BEST-SELLING COURSE SECTION */}

      <section className="courses-section__header">
        <div className="courses-section">
          <p>Our bestselling course</p>
          <p>
            Reasons why you should understand how the <br /> internet and Web3
            works.
          </p>
          <button>View our courses &#8594;</button>
          <img src={btc} alt="eth-icon" className="btc-icon" />
          <img src={btcBlur} alt="blur-icon" className="btcBlur-icon" />
        </div>
      </section>

      {/* OAK VICE SECTION */}
      <section className="oakvice-section">
        <div className=" align-items-center oakvice-section__header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Introducting Oakvice
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="oakvice-container">
          <div className="oakvice-container__text">
            <h2>Learn about Web3 in multiple Languages</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur. Molestie pulvinar quis
              dignissim nulla dolor tincidunt integer amet fermentum. Penatibus
              tempor non nec pharetra. Viverra amet vel a eu maecenas. Ac
              viverra pellentesque suspendisse sed ut aliquam.
            </p>
            <button className="btn oak-btn">Learn more</button>
          </div>

          <img src={oakvice} alt="oakvice" className="oakvice-img" />
        </div>
      </section>

      {/* USERS REVIEW SECTION */}

      <section className="review-section__header">
        <div className="d-flex align-items-center justify-content-center review-section-header">
          <h3 className="oak-section__wrapper">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
           Users Review
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>
        </section>
    </Layout>
  );
};

export default LandingPage;
