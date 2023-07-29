import React, { useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import '../../assets/style/academy.css'
import ArticleCourses from './Article';
import VideoCourses from './Video';

const Academy = () => {
    const [activeTab, setActiveTab] = useState('article')

    return (
        <AuthGuard>
            <div className='d-flex align-items-center bg-white academy-banner oak-container-fluid position-relat oak-mb'>
                <div className='academy-left__side w-100 d-flex align-items-center '>
                    <h3 className='academy-banner__text'>All the knowledge you <span className='needText'> need</span> on Bitcoin and Crypto</h3>
                </div>
                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="297" height="436" viewBox="0 0 297 436" fill="none">
                        <path d="M280.001 0.000335913L296.502 -2.74465e-05L19.5007 435.5L0.501632 435.5L280.001 0.000335913Z" fill="white" />
                    </svg>
                </div> */}
                {/* <div className='academy-right__side position-absolte'>
                    <img src={academyBg} alt='academy' />
                </div> */}
            </div>
            <div className='academy-tab__item_wrapper d-flex align-items-center oak-container-fluid justify-content-between pb-2 oak-mb' id='tabbedComp'>
                <p className={`academy-tab__item mb-0 text-center w-100 ${activeTab === 'article' ? 'active' : ""}`} role='button'
                    onClick={() => {
                        setActiveTab('article')
                    }}
                >Article Courses</p>
                <p
                    onClick={() => {
                        setActiveTab('video')
                    }}
                    className={`academy-tab__item mb-0 text-center w-100 ${activeTab === 'video' ? 'active' : ""}`} role='button'>Video Courses</p>
            </div>

            {
                activeTab === 'article' ? <ArticleCourses /> : <VideoCourses />
            }

        </AuthGuard>
    )
}
export default Academy