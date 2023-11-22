import React, { useState, useEffect } from "react";
import "../assets/style/home.css";
import Layout from "../Layout";
import discord from "../assets/images/discord.svg";
import twitter from "../assets/images/twitter.svg";
import telegram from "../assets/images/telegram.svg";
import reddit from "../assets/images/reddit.svg";
import s1 from "../assets/images/s1.svg";
import s2 from "../assets/images/s2.svg";
import p1 from "../assets/images/p1.svg";
import oakimg from "../assets/images/oakimg.svg"
import p2 from "../assets/images/p2.svg";
import p3 from "../assets/images/p3.svg";
import courseimg1 from "../assets/images/courseimg1.svg"
import courseimg2 from "../assets/images/courseimg2.svg"
import courseimg3 from "../assets/images/courseimg3.svg"
import cardimg1 from '../assets/images/cardimg1.svg'
import cardimg2 from '../assets/images/cardimg2.svg'
import cardimg3 from '../assets/images/cardimg3.svg'
import cardimg4 from '../assets/images/cardimg4.svg'
import cardimg5 from '../assets/images/cardimg5.svg'
import cardimg6 from '../assets/images/cardimg6.svg'
import cardimg7 from '../assets/images/cardimg7.svg'
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
import quote from "../assets/images/quote.png";
import userOne from "../assets/images/Component 6.png";
import userTwo from "../assets/images/Component 7.png";
import userThree from "../assets/images/Component 8.png";
import userFour from "../assets/images/Component 9.png";
// import WalletModal from "../component/WalletModal";
import n1 from "../assets/images/nft4.svg";
import n2 from "../assets/images/nfti2.svg";
import n3 from "../assets/images/nfti3.svg";
import n4 from "../assets/images/n4.svg";
import n5 from "../assets/images/n5.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Row, Col } from 'reactstrap'
import { useWeb3Modal } from '@web3modal/react'


// import connectWallet from '../utils/walletConnect'

const LandingPage = () => {
  const navigate = useNavigate()
  const myDate = new Date();
  const month = myDate.toLocaleString("default", { month: "long" });
  const day = String(myDate.getDay()).padStart(2, 0);
  const year = myDate.getFullYear();
  const mins = myDate.getMinutes();

  // console.log(mins);
  const date = `${month} ${day}, ${year}. ${mins} mins read`;
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleModal = () => {
  //   setIsOpen(!isOpen)
  // }
  const arrayGenerator = (length) => {
    return Array.from({ length }, (_, index) => index + 1);
  };

  const { open, close } = useWeb3Modal()
    const words = ["Learners", "Writers", "Designers", "Developers", "Educators"]; // Array of words to cycle through
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState(`The Decentralized platform for Web3 Educators`);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (currentWordIndex + 1) % words.length;
        setCurrentWordIndex(nextIndex);
        setDisplayText(`The Decentralized platform for Web3 <p style="color: #FF4E00">${words[nextIndex]}</p>`);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [currentWordIndex, words]);

  return (
    <Layout>
      <div id="oak-hero-wrapper" className="oak-hero__wrapper ">
        <div id="oak-container-fluid" className="hero-cta__wrapper d- d-md-flex align-items-center oak-container-fluid">
          <div className="hero-cta__cointainer">
            <div id="d-flex" className="d-flex">
              <div className="oak-socials-hero__wrapper d-none d-md-block">
                <div id="icon__container">
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

              <div className="oak-introduction">
              <span className="oak-hero-text" dangerouslySetInnerHTML={{ __html: displayText }} />
               
                <h3 className="oak-hero-header">
                  Unlocking a new world of learning and possibilities!
                </h3>
                <p className="oak-hero-sub-text">
                  Learning about Web3 is not only important for staying current
                  with technological advancements, but it also offers exciting
                  opportunities for innovation and growth in various industries.
                </p>

                <div className="d-block d-md-none oak-introduction__mobile-view">

                  <div className="oak-socials-hero__wrapper h-100 d-flex align-items-start justify-content-center flex-column">
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

                <div className=" hero-cta_btn">
                  <button className=" oak-btn mb-5"
                    onClick={() => {
                      open()
                    }}
                  >Get Started</button>
                </div>

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

      <section id="partners__overflow" className="oak-container-fluid py-3">
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

        <div id="over-flow__animation" className="d-flex align-items-center justify-content-around oak-partners__wrapper mt-4 mb-5">
          <div className="partner__brands">
            <img src={p1} alt="icon" />
          </div>
          <div className="partner__brands">
            <img src={p2} alt="icon" />
          </div>
          <div className="partner__brands">
            <img src={p3} alt="icon" />
          </div>
          <div className="partner__brands">
            <img src={p4} alt="icon" />
          </div>
        </div>
      </section>

      <section className=" oak-container-fluid   oak-section-two mb-4">
        
        <p className="oak-section__subheading mb-0">
        What is
        </p>
        <h3 className="oak-section__head mb-4">
        OakChain
        </h3>
        <p className="oak-section-subheader">Web3 is the future, and expertise in this field is in high demand. A handful of experts cannot carry the entire industry, at least not for long. 
          <br></br>
          <br></br>
Oakchain aim to empower a diverse and skilled workforce to drive adoption and innovation in Web3.</p>

          <img className="oakimg" src={oakimg}></img>
         <p className="oak-features__container-header">Our operation across the platform</p>
         <h3 className="oak-features__container-subheader">We have the best strategy
and the best process</h3>,
      </section>


      <section className=" oak-container-fluid oak-mob d-md-block">
        <div className="oak-features__container">
        
        

          <div className=" oak-feature-div">
            
         
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg1}></img>
                <button className="status"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Academy</h3>
                <p>Educating you on all the knowledge you need on Bitcoin and Crypto in the simplest form possible.</p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/academy')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg2}></img>
                <button className="status d-none"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Podcast</h3>
                <p>Feel free to listen on the go, to Web 3 content, specially curated to suit your unique needs  </p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/podcast')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg3}></img>
                <button className="status d-none"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Cyptonaire</h3>
                <p>Compete live and win big. Bring your talents to bear. Lots of gaming adventures awaits</p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/cypotnaire')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg4}></img>
                <button className="status d-none"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Marketplace</h3>
                <p>A wonderful variety to choose from. Shop and sell all things Web 3 on our marketplace </p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/marketplace')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg5}></img>
                <button className="status d-none"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Reward</h3>
                <p>Mouthwatering offers and incentives on completion on tasks </p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/reward')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg6}></img>
                <button className="status"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Become a Writer</h3>
                <p>Got the skills and passion for technology ? Come on board and share your creativity with the world!</p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/https://docs.google.com/forms/d/e/1FAIpQLSdT3kMs5Dk0XqGFExS9k68u3y3Yf_W5eTnLOqkCcBJr3lvcxQ/viewform')}}></button>
              </div>
            </div>
            <div className="oak-main-div">
              <div className="first">
                <img src={cardimg7}></img>
                <button className="status d-none"> <h1>BETA</h1></button>
              </div>
              <div className="second">
                <h3>Jobs</h3>
                <p>Explore exciting opportunities today, discover a world of possibilities with diverse job listings</p>
              </div>
              <div className="third">
                <button onClick={() => {navigate('/jobs')}}></button>
              </div>
            </div>
          </div>
        </div>
      </section>
<br className="oL"></br>
<br className="oL"></br>
<br className="oL"></br>
<br className="oL"></br>
     



      <section className=" ">
        <div className="d-flex align-items-center justify-content-center news-section-header">
          <h3 className="oak-section__wrapper newsLine">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Get Skilled in Web3
            <span className="ps-1 ps-md-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>
      </section>

      <section className="d-md-block  oak-container-fluid home-news__card-wrapper">
        <Row className="home-course">
          <Col sm='12' md={4} className="home-course-card">
            <div className="home-news__card">
              <img src={courseimg1} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={oakimg} alt="logo" />
                  <h5 className="card-title">Oak Course</h5>
                </div>

                <p className="card-text">
                How to be a Web3 Technical Writer - Full Course.
                </p>

                <p className="card-text__last-child">
                Learn from the best web3 technical writers and stand at the edge of digital innovation and exposures.
                </p>

                <p className="card-time">{date}</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="home-course-card">
            <div className="home-news__card" >
              <img src={courseimg2} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={oakimg} alt="logo" />
                  <h5 className="card-title">Oak Course</h5>
                </div>

                <p className="card-text">
                How to be a Blockchain Educator  - Full Course.
                </p>

                <p className="card-text__last-child">
                Learn from the best web3 Educators and stand at the edge of digital innovation and exposures.
                </p>

                <p className="card-time">{date}</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="home-course-card">
            <div className="home-news__card" >
              <img src={courseimg3} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={oakimg} alt="logo" />
                  <h5 className="card-title">Oak Course</h5>
                </div>

                <p className="card-text">
                How to be a Web3 Reporter - Full Course.
                </p>

                <p className="card-text__last-child">
                Learn from the best web3 technical writers and stand at the edge of digital innovation and exposures.
                </p>

                <p className="card-time">{date}</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="home-course-card">
            <div className="home-news__card" >
              <img src={googleEyes} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={oakimg} alt="logo" />
                  <h5 className="card-title">Oak Course</h5>
                </div>

                <p className="card-text">
                How to become an Oak Writer - Full Course.
                </p>

                <p className="card-text__last-child">
                Learn from the best web3 writers and stand at the edge of digital innovation and exposures.
                </p>

                <p className="card-time">{date}</p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <p className="oak-seeMore">See more</p>

        </div>
      </section>



      <section className="podcast-section">
        <div className="d-md-block d-none align-items-center podcast-section-header">
          <h3 className="oak-section__wrapper down">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Listen to Web3 Podcasts
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="d-md-none d-block ">
          <div className=" podcast-section-header">

          </div>
          <h3 className="oak-section__wrapper down">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Listen to Web3 Podcasts
            <span className="ps-1 ps-md-3">
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

      <section className="  nest-section">
        <div className="d-flex align-items-center justify-content-center nest-section-header">
          <h3 className="oak-section__wrapper nft-mobile__text">
            <span className="pe-1 pe-md-3 ">
              <img src={s1} alt="icon" />
            </span>
            Browse our NFT collection
            <span className="ps-1 ps-md-3 ">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>

        <div className="oak-nest__container ">
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

            <button className="nestBtn btn oak-btn">Buy now</button>
          </div>
          <div className="oak-nest__img overflow-hidden">
            <div className="d-flex align-items-center justify-content-betwee nft-animation-wrapper " style={{
              gap: '1em'
            }}>
              <div className="">
                {arrayGenerator(5).map(() => (
                  <div className="nft-collections_wrapper">
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n1} alt='nft' />
                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n2} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-success mb-3">
                      <img src={n3} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n4} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n5} alt='nft' />
                    </div>

                  </div>
                ))}
              </div>
              <div>
                {arrayGenerator(5).map(() => (
                  <div className=" direction-up">
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n5} alt='nft' />
                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n4} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-success mb-3">
                      <img src={n3} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n2} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n1} alt='nft' />
                    </div>

                  </div>
                ))}
              </div>
              <div>

                {arrayGenerator(5).map(() => (
                  <div className="nft-collections_wrapper">
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n1} alt='nft' />
                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n2} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-success mb-3">
                      <img src={n3} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-danger mb-3">
                      <img src={n4} alt='nft' />

                    </div>
                    <div className="nft-img__container bg-info mb-3">
                      <img src={n5} alt='nft' />
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>




      {/* BEST-SELLING COURSE SECTION */}
      <section className="d-none d-md-block courses-section__header">
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

      <section className=" d-block d-md-none courses-section__header position-relative">
        <div className="courses-section">
          <p>Our bestselling course</p>
          <p>
            Reasons why you should understand how the <br /> internet and Web3
            works.
          </p>
          <button>View our courses &#8594;</button>

        </div>
        <img src={btc} alt="eth-icon" className="btc-icon" />
        <img src={btcBlur} alt="blur-icon" className="btcBlur-icon" />
      </section>


      {/* OAK roadmap SECTION */}
      <section className="  oakvice-section">
        <div className=" align-items-center oakvice-section__header">
          <h3 className="oak-section__wrapper viceUp">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Our RoadMap
            <span className="ps-1 ps-md-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
          <h3 className="roadmaph3">Explore the Journey Ahead</h3>
        </div>
<br></br>
<br></br>
<br></br>
        <div className="oakvice-container">
          <div className="containerBeam">
          <div className="point"></div>
          <div className="beam"></div>
          </div>
         
        </div>
      </section>
      {/* USERS REVIEW SECTION */}

      <section className=" review-section__header">
        <div className="d-flex-column align-items-center justify-content-center review-section-header">
          <h3 className="oak-section__wrapper shift">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Users Review
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        <h3 className="userreviewh3">What Educators & Learners Say <br></br> About Us</h3>
        </div>

        <div className="review-section">
          <div className="review-card">
            <img className="review-img" alt="user-img" src={userOne} />
            <div className="review-text">
              <img className="review-quote" alt="quote" src={quote} />
              <p>
                Oakchain has revolutionized the way our business operates. The
                platform is <br /> intuitive and easy to use, saving us valuable
                time and resources. The support team <br /> is also top-notch
                and always available to assist us with any questions or
                concerns.
              </p>
            </div>
          </div>
        </div>


        {/* --------------------------right */}

        <div className="review-section">
          <div className="review-card__right">
            <div className="review-text">
              <img className="review-quote" alt="quote" src={quote} />
              <p>
                Working with Oakchain has been a fantastic experience. Their
                technology-driven <br /> approach to digital experience is
                unmatched, and the results have been<br /> phenomenal.
              </p>
            </div>
            <img className="review-img" alt="user-img" src={userTwo} />
          </div>
        </div>

        {/* --------------------------left */}

        <div className="review-section">
          <div className="review-card">
            <img className="review-img" alt="user-img" src={userFour} />
            <div className="review-text">
              <img className="review-quote" alt="quote" src={quote} />
              <p>
                The level of expertise and professionalism at Oakchain is
                unparalleled. We highly <br /> recommend Oakchain to any
                business looking to improve its digital footprint.
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------right */}

        <div className="review-section">
          <div className="review-card__right">
            <div className="review-text">
              <img className="review-quote" alt="quote" src={quote} />
              <p>
                Oakchain has been a valuable partner in our digital journey.
                Their <br /> comprehensive approach to digital experience, including
                web3 and more, has <br /> allowed us to stay ahead of the curve in a
                rapidly changing digital landscape.
              </p>
            </div>
            <img className="review-img" alt="user-img" src={userThree} />
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default LandingPage;
