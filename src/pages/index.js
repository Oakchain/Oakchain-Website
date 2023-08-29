// import React, { useState } from "react";
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

// import connectWallet from '../utils/walletConnect'

const LandingPage = () => {
  const navigate = useNavigate()
  const myDate = new Date();
  const month = myDate.toLocaleString("default", { month: "long" });
  const day = String(myDate.getDay()).padStart(2, 0);
  const year = myDate.getFullYear();
  const mins = myDate.getMinutes();

  console.log(mins);
  const date = `${month} ${day}, ${year}. ${mins} mins read`;
  // const [isOpen, setIsOpen] = useState(false)

  // const toggleModal = () => {
  //   setIsOpen(!isOpen)
  // }
  const arrayGenerator = (length) => {
    return Array.from({ length }, (_, index) => index + 1);
  };


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
                <h3 className="oak-hero-text">
                  Step into the future with Web3
                </h3>
                <h3 className="oak-hero-header">
                  Unlocking a new world <br /> of learning and possibilities!
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
                      navigate('/home')
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

      <section className=" oak-container-fluid mb-4">
        <p className="oak-section__subheading mb-0">
          Our operation across the platform
          <span className="px-3 d-none d-md-block">
            <img src={s2} alt="icon" />
          </span>
        </p>
        <h3 className="oak-section__head mb-4">
          We have the best strategy and the best process
        </h3>
        <div className="hero-cta_btn">
          <button className="btn oak-btn ">Get Started</button>

        </div>
      </section>


      <section className=" oak-container-fluid d-none d-md-block">
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

      <section className="d-md-none d-block ">
        <div
          className="oak-features__container"

        >
          <Carousel
            showThumbs={false}
            emulateTouch
            showStatus={false}
            showArrows={false}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
          >
            <div className="oak-feature__wrapper d-flex justify-content-center">
              <img src={feat1} alt="icon" />
            </div>
            <div className="oak-feature__wrapper d-flex justify-content-center">
              <img src={feat2} alt="icon" />
            </div>
            <div className="oak-feature__wrapper d-flex justify-content-center">
              <img src={feat3} alt="icon" />
            </div>
          </Carousel>
        </div>

      </section>



      <section className=" ">
        <div className="d-flex align-items-center justify-content-center news-section-header">
          <h3 className="oak-section__wrapper newsLine">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Get Latest Web3 News
            <span className="ps-1 ps-md-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
        </div>
      </section>

      <section className="d-md-block d-none oak-container-fluid home-news__card-wrapper">
        <Row className="gx-4">
          <Col sm='12' md={4}>
            <div className="home-news__card">
              <img src={polygon} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={logo} alt="logo" />
                  <h5 className="card-title">Oak news</h5>
                </div>

                <p className="card-text">
                  Polygon Labs and Google Partner to Boost Web3 Development
                </p>

                <p className="card-text__last-child">
                  Learning about Web3, blockchain, and NFTs can help individuals
                  understand the potential for decentralized technologies to...
                </p>

                <p className="card-time">{date}</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="home-news__card" >
              <img src={googleCloud} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={logo} alt="logo" />
                  <h5 className="card-title">Oak news</h5>
                </div>

                <p className="card-text">
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
          </Col>
          <Col md={4}>
            <div className="home-news__card" >
              <img src={googleEyes} className="home-news__card-img" alt="..." />
              <div className="home-news__card-body">
                <div className="card-body__logo d-flex align-items-center">
                  <img src={logo} alt="logo" />
                  <h5 className="card-title">Oak news</h5>
                </div>

                <p className="card-text">
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
          </Col>
        </Row>
        <div className="d-flex align-items-center justify-content-center">
          <p className="oak-seeMore">See more</p>

        </div>
      </section>


      <section className="d-block d-md-none home-news__card-wrapper">
        <div className="d-flex align-items-center overflow-auto flex-nowrap mobile-news__card-wrapper ps-4">
          <div className="home-news__card me-4">
            <img src={polygon} className="home-news__card-img" alt="..." />
            <div className="home-news__card-body">
              <div className="card-body__logo d-flex align-items-center">
                <img src={logo} alt="logo" />
                <h5 className="card-title">Oak news</h5>
              </div>

              <p className="card-text">
                Polygon Labs and Google Partner to Boost Web3 Development
              </p>

              <p className="card-text__last-child">
                Learning about Web3, blockchain, and NFTs can help individuals
                understand the potential for decentralized technologies to...
              </p>

              <p className="card-time">{date}</p>
            </div>
          </div>

          <div className="home-news__card me-4" >
            <img src={googleCloud} className="home-news__card-img" alt="..." />
            <div className="home-news__card-body">
              <div className="card-body__logo d-flex align-items-center">
                <img src={logo} alt="logo" />
                <h5 className="card-title">Oak news</h5>
              </div>

              <p className="card-text">
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

          <div className="home-news__card me-4" >
            <img src={googleEyes} className="home-news__card-img" alt="..." />
            <div className="home-news__card-body">
              <div className="card-body__logo d-flex align-items-center">
                <img src={logo} alt="logo" />
                <h5 className="card-title">Oak news</h5>
              </div>

              <p className="card-text">
                Google Cloud Expands Partnerships, Wants More Web3 Startups To

              </p>

              <p className="card-text__last-child">
                Learning about Web3, blockchain, and NFTs can help individuals
                understand the potential for decentralized technologies to...
              </p>

              <p className="card-time">{date}</p>
            </div>
          </div>
        </div>



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

      {/* OAK WRITER SECTION */}
      <section className=" writer-section__header">
        <div className="d-flex align-items-center justify-content-center writer-section-header">
          <h3 className="oak-section__wrapper pullUp">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Become an Oak writer
            <span className="ps-1 pe-md-3">
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
            <button className="btn oak-btn writeBTN">Learn more</button>
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


      {/* OAK VICE SECTION */}
      <section className="  oakvice-section">
        <div className=" align-items-center oakvice-section__header">
          <h3 className="oak-section__wrapper viceUp">
            <span className="pe-1 pe-md-3">
              <img src={s1} alt="icon" />
            </span>
            Introducting Oakvice
            <span className="ps-1 ps-md-3">
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
            <button className="btn oak-btn viceBTN">Learn more</button>
          </div>

          <img src={oakvice} alt="oakvice" className="oakvice-img" />
        </div>
      </section>
      {/* USERS REVIEW SECTION */}

      <section className=" review-section__header">
        <div className="d-flex align-items-center justify-content-center review-section-header">
          <h3 className="oak-section__wrapper shift">
            <span className="px-3">
              <img src={s1} alt="icon" />
            </span>
            Users Review
            <span className="px-3">
              <img src={s2} alt="icon" />
            </span>
          </h3>
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
                technology-driven <br/> approach to digital experience is
                unmatched, and the results have been<br/> phenomenal.
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
