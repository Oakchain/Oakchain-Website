import React, { useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import '../../assets/style/academy.css'
import academyBg from '../../assets/images/academyBg.svg'
import { arrayGenerator } from '../../utils';
import Article from '../../component/Academy/Article';
import art1 from '../../assets/images/art1.svg'
import art2 from '../../assets/images/art2.svg'
import art3 from '../../assets/images/art3.svg'
import { Row, Col } from 'reactstrap'

const Academy = () => {
    const [activeTab, setActiveTab] = useState('article')
    const academyTag = ['All', 'Active', 'In progress', 'Completed']
    const [activeTag, setActiveTag] = useState('All');
    const images = [art1, art2, art3];

    return (
        <AuthGuard>
            <div className='d-flex align-items-center bg-white academy-banner oak-container-fluid position-relat oak-mb'>
                <div className='academy-left__side w-100 d-flex align-items-center '>
                    <h3 className='academy-banner__text'>All the knowledge you need on Bitcoin and Crypto</h3>
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
            <div className='academy-tab__item_wrapper d-flex align-items-center oak-container-fluid justify-content-between pb-2 oak-mb'>
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
            <div className='d-flex align-items-center justify-content-between oak-container-fluid oak-mb'>
                <div>
                    <h5 className="oak-section__title w-100">Read and Learn about Blockchain and Crypto</h5>
                </div>
                <div>
                    <div className="d-flex align-items-center" >
                        {
                            academyTag.map(el => <p
                                role='button'
                                onClick={() => {
                                    setActiveTag(el)
                                }}
                                className={`me-1 oak-news_tag text-center flex-shrink-0 mb-0 ${activeTag === el ? 'active' : ""}`}>
                                {el}
                            </p>
                            )
                        }
                    </div>
                </div>



            </div>
            <div className='oak-container-fluid'>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i+1} />
                        </Col>
                    )}
                </Row>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i+1} />
                        </Col>
                    )}
                </Row>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i+1} />
                        </Col>
                    )}
                </Row>

            </div>

        </AuthGuard>
    )
}
export default Academy