import AuthGuard from "../../Layout/AuthGuard";
import React, { useState } from 'react'
import "../../assets/style/home_page.css";
import bannerImg from '../../assets/images/hand-banner.svg'
import rightArrow from '../../assets/images/rightArrow.svg'
import { Trending } from "../../component/News";
import { Banner as AcademyBanner } from "../../component/Academy";
import { FuturePodcast } from "../../component/Podcast";
import Tasks from "../../component/Tasks";
import { Row, Col } from 'reactstrap'
import { useNavigate } from "react-router-dom";
import oakwriter from "../../../src/assets/images/oakwriter.svg"
import PostModal from "../../component/PostModal";

const Home = () => {
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
      };

    return (
        <AuthGuard>
            <div className=" ">

        <PostModal
          toggle={toggleModal}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

                <div className=" oak-container-fluid oak-home-banner d-flex position-relative oak-mb">
                    <div className="oak-banner__text-wrapper">
                        <p className="oak-banner-text">Step into the future with Web3</p>
                        <h3 className="oak-banner-header mb-4">Unlocking a new world of learning and possibilities!</h3>
                        <p className="oak-banner-sub-text">Learning about Web3 is not only important for staying current with technological advancements, but it also offers exciting opportunities for innovation and growth in various industries.</p>
                    </div>
                    <div className="position-absolute oak-home__banner-img ">
                        <img src={bannerImg} alt='banner-img' />
                    </div>
                </div>
                
                

                <section className="oak-container-fluid oak-mb ">
                    <div className="d-flex align-items-center justify-content-between oak-mobile-news__wrpper oak-mb">
                        <h5 className="oak-section__title">Get Updated with Web3 News</h5>
                        <div className="d-flex align-items-center" role='button' onClick={() => {
                            navigate('/news')
                        }}>
                            <p className="oak-redirect__text mb-0 pe-md-3 pe-1">See all</p>
                            <div className="redirect-arrow">
                                <img src={rightArrow} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <Trending />
                </section>

                <section className=" oak-container-fluid oak-mb">
                    <div className="d-flex align-items-center justify-content-between oak-mb">
                        <h5 className="oak-section__title">Learn on our Academy</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-3">See all</p>
                            <div>
                                <img src={rightArrow} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <AcademyBanner />
                </section>



                <section className="oak-mb">
                    <div className="oak-container-fluid d-flex align-items-center justify-content-between ">
                        <h5 className="oak-section__title">Explore top podcasts</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-3">See all</p>
                            <div>
                                <img src={rightArrow} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className="home-future__podcast_wrapper">
                        <div className="ps-md-5 ps-0 ms-md-4 ms-3 py-5">
                            <FuturePodcast />
                        </div>
                    </div>
                </section>

                <section className="oak-mb oak-container-fluid">
                    <div className="d-flex align-items-center justify-content-between oak-mb">
                        <h5 className="oak-section__title">Complete tasks and earn</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-1 pe-md-3">See all</p>
                            <div>
                                <img src={rightArrow} alt='icon' />
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <Row className="gy-3">
                            <Col md='4' sm='12'>
                                <Tasks />
                            </Col>
                            <Col md='4' sm='12'>
                                <Tasks />
                            </Col>
                            <Col md='4' sm='12'>
                                <Tasks />
                            </Col>
                        </Row>
                    </div>

                    <div className="d-flex d-md-none align-items-center flex-nowrap w-100 overflow-auto home-mobile_task-center">
                        <Tasks />
                        <Tasks />
                        <Tasks />
                    </div>
                    {/* <Trending /> */}
                </section>

                {/* <img onClick={() => { window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdT3kMs5Dk0XqGFExS9k68u3y3Yf_W5eTnLOqkCcBJr3lvcxQ/viewform'; }}
 src={oakwriter} alt="oakwriter" className="oakWriter"/> */}
 
                <img onClick={toggleModal} src={oakwriter} alt="oakwriter" className="oakWriter"/>

            </div>
        </AuthGuard>
    )
}

export default Home