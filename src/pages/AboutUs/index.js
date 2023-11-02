import React, { useEffect, useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import bannerI from "../../assets/images/oakk.png"
import teamBanner from "../../assets/images/teambanner.png"
import founder1 from "../../assets/images/founder1.png"
import founder2 from "../../assets/images/founder2.png"
import staff1 from '../../assets/images/s1.png'
import staff2 from '../../assets/images/s2.png'
import staff3 from '../../assets/images/s3.png'
import staff4 from '../../assets/images/s4.png'
import '../../assets/style/event.css'
import '../../assets/style/about.css'
const Aboutus = () => {
   
    return (
        <AuthGuard>
             <div className=" ">
                <div className=" oak-container-fluid oak-home-bannerr oak-home-bannerrr d-flex position-relative oak-mb">
                    <div className="oak-bannerr__text-wrapper">
                        <h3 className="oak-bannerr-header mb-4">About Oak</h3>
                    </div>
                    <div className="position-absolute oak-home__bannerrr-img ">
                        <img src={bannerI} alt='bannerr-img' />
                    </div>
            </div>
            <section className='oak-container-fluid oak-mb oak-about-content'>
                <h2 className='oak-about-content-header'>About Us</h2>
                <h4 className='oak-about-content-headersub1'>Educating and Empowering the next Web3 Generation.</h4>
                <h4 className='oak-about-content-headersub1'>Oak is not just a platform; it's a catalyst for transformation in the blockchain education and media arena. Our core mission is clear: to demystify the intricacies of Web3 through streamlined courses and interactive edutainment. We empower individuals with essential Web3 skills, opening doors to diverse career opportunities in this dynamic space. Yet, Oak is more than an educational platform; it's a bridge that connects ecosystem projects to the uncharted territories of the African continent through real-world events.</h4>
                <h3 className='oak-about-content-subheader'>Our Mission</h3>
                <h4 className='oak-about-content-headersub1'>At Oak, our mission is to facilitate the adoption of Web3 technology by providing accessible education, fostering skill development, and bridging the gap between talent and opportunity. We believe that a well-rounded, empowered, and diverse community is essential for the sustainable growth of the Web3 ecosystem.
</h4>
                <h3 className='oak-about-content-subheader'>Our Goal</h3>
                <h4 className='oak-about-content-headersub1'>Our primary and overarching objective is to ensure the enduring prosperity of the Web3 industry. We are steadfast in this mission, and our approach involves tackling the existing challenges head-on while actively fostering the conditions necessary for its long-term sustainability.
How We Do It</h4>
            </section>

            <div className=" oak-container-fluid oak-team-banner d-flex position-relative oak-mb">
                    <div className="oak-tbanner__text-wrapper">
                        <h3 className="oak-tbanner-header mb-4">Meet Our Team</h3>
                    </div>
                    <div className="position-absolute oak-team__banner-img ">
                        <img src={teamBanner} alt='banner-img' />
                    </div>
            </div>
            <section className='oak-container-fluid oak-mb oak-about-content2'>
                <h2 className='oak-content2-header'>We Are Passionate</h2>
                <h2 className='oak-content2-subheader'>At Oak, our dedication is the driving force behind our mission. Our unwavering passion and hard work ensure that we empower the next Web3 generation, bridging the gap and fostering a more inclusive and knowledgeable future.</h2>
                <div className='foundersDiv'>
                    <div className='founder1'>
                        <img src={founder1}></img>
                        <h1>Nansel Rimsah</h1>
                        <p>Founder</p>
                    </div>
                    <div className='founder1'><img src={founder2}></img>
                        <h1>Tochukwu Nwolisa</h1>
                        <p>Co-Founder</p></div>
                </div>

                <div className='staffDiv'>
                    <div className='staff'>
                        <img src={staff1}></img>
                        <h1>Femi Adeniyi</h1>
                        <p>Head of Engineering</p>
                    </div>
                    <div className='staff'>
                        <img src={staff2}></img>
                        <h1>Franklin Ejidu</h1>
                        <p>Ui/Ux Designer</p>
                    </div>
                    <div className='staff'>
                        <img src={staff3}></img>
                        <h1>Benedict Kabiawu</h1>
                        <p>Software Engineer</p>
                    </div>
                    <div className='staff'>
                        <img src={staff4}></img>
                        <h1>Peace Okafor</h1>
                        <p>Technical Writer</p>
                    </div>
                    <div className='staff'>
                        <img></img>
                        <h1>Chibugo Illoh</h1>
                        <p>Project Manager</p>
                    </div>
                    <div className='staff'>
                    <img></img>
                        <h1>Samson Ajulor</h1>
                        <p>Blockchain Developer</p>
                    </div>
                    </div>
            </section>
                </div>
           
        </AuthGuard>
    )
}

export default Aboutus