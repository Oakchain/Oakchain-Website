import React, { useEffect, useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import bannerI from "../../assets/images/questionmark.svg"
import teamBanner from "../../assets/images/teambanner.png"
import founder1 from "../../assets/images/founder1.png"
import founder2 from "../../assets/images/founder2.png"
import staff1 from '../../assets/images/s1.png'
import staff2 from '../../assets/images/s2.png'
import staff3 from '../../assets/images/s3.png'
import staff4 from '../../assets/images/s4.png'
import '../../assets/style/event.css'
import '../../assets/style/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Aboutus = () => {
    return (
        <AuthGuard>
             <div className="oakk-about-div ">
                <div className=" oak-container-fluid oak-home-bannerr oak-home-bannerrr d-flex position-relative oak-mb" id="about">
                    <div className="oak-bannerr__text-wrapper">
                        <h3 className="oak-bannerr-header mb-4">About Oak</h3>
                    </div>
                    <div className="position-absolute oak-home__bannerrr-img ">
                        <img src={bannerI} alt='bannerr-img' />
                    </div>
            </div>
            <div className='oak-actual-about'>
                <div className='oak-actual-about-content'>
                    <h1 className='oak-actual-about-content-title'>About</h1>
                    <h1 className='oak-actual-about-content-subtitle'>Educating and Empowering the next Web3 Generation.
Oak is not just a platform; it's a catalyst for transformation in the blockchain education and media arena. Our core mission is clear: to demystify the intricacies of Web3 through streamlined courses and interactive edutainment. We empower individuals with essential Web3 skills, opening doors to diverse career opportunities in this dynamic space. Yet, Oak is more than an educational platform; it's a bridge that connects ecosystem projects to the uncharted territories of the African continent through real-world events.</h1>                </div>
                <div className='oak-actual-about-content'>
                <h1 className='oak-actual-about-content-title'>Our Mission</h1>
                <h1 className='oak-actual-about-content-subtitle'>At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered, and diverse community is essential for the sustainable growth of the Web3 ecosystem.

</h1> 
                </div>
                <div className='oak-actual-about-content'>
                <h1 className='oak-actual-about-content-title'>Our Goal</h1>
                <h1 className='oak-actual-about-content-subtitle'>Our primary and overarching objective is to ensure the enduring prosperity of the Web3 industry. We are steadfast in this mission, and our approach involves tackling the existing challenges head-on while actively fostering the conditions necessary for its long-term sustainability.</h1> 
                </div>
            </div>
            <div className='oak-actual-about-footer'>
                <div className='oak-actual-about-footer-con'>
                    <FontAwesomeIcon className='oak-actual-about-footer-con-icon' icon={faInstagramSquare}/>
                    <FontAwesomeIcon className='oak-actual-about-footer-con-icon' icon={faTwitter}/>
                </div>
                <h1 className='oak-actual-about-footer-sub'>All right reserved. Designed with <span className='theHeart'> <FontAwesomeIcon icon={faHeart} /> </span> by Oakchain. </h1>
            </div>
                </div>
           
        </AuthGuard>
    )
}

export default Aboutus