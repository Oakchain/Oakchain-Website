import React from 'react'
import { Row, Col } from 'reactstrap'
import main_news from '../../../assets/images/mainNews.png'
import playIcon from '../../../assets/images/playIcon.svg'
import logo from '../../../assets/images/onLogo.svg'
import n2 from '../../../assets/images/n2.svg'
import n3 from '../../../assets/images/n3.svg'
import views from '../../../assets/images/views.svg'
import share from '../../../assets/images/share.svg'
import comment from '../../../assets/images/comment.svg'


import { List } from '../index'

const Trending = () => {
    return (
        <Row className='g-3'>
            <Col sm='12' md='7'>
                <div className='oak-main__news  bg-white h-100' >
                    <div className='oak-main__news_img__wrapper position-relative'>
                        <div className='w-100 trending-main_img'>
                            <img src={main_news} alt='main_img' className='w-100 h-100' style={{
                                objectFit: 'cover'
                            }} />
                        </div>
                        <div className='position-absolute' style={{
                            top: '40%',
                            left: '50%'
                        }}>
                            <img src={playIcon} alt='main_img' />
                        </div>
                    </div>
                    <div className='oak-main-news_details__wrapper'>
                        <div className='d-flex align-items-center justify-content-between mb-1'>
                            <div className='d-flex align-items-center  py-2'>
                                <div className='pe-1 oak-news_logo__wrapper'>
                                    <img src={logo} alt='icon' />
                                </div>
                                <p className='mb-0 oak-news__text pt-1'>Oak News</p>
                            </div>
                            <div className=' d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center  py-2 pe-4'>
                                    <div className='pe-3 oak-stats__icon'>
                                        <img src={views} alt='icon' />
                                    </div>
                                    <p className='mb-0 oak-news__stats pt-1'>1.5m</p>
                                </div>
                                <div className='d-flex align-items-center  py-2 pe-4'>
                                    <div className='pe-3 oak-stats__icon'>
                                        <img src={comment} alt='icon' />
                                    </div>
                                    <p className='mb-0 oak-news__stats pt-1'>35K</p>
                                </div>
                                <div className='d-flex align-items-center  py-2'>
                                    <div className='pe-3 oak-stats__icon'>
                                        <img src={share} alt='icon' />
                                    </div>
                                    <p className='mb-0 oak-news__stats pt-1'>35K</p>
                                </div>
                            </div>
                        </div>
                        <h3 className='oak-news__title w-50 mb-0'>
                            Polygon Labs and Google Partner to Boost Web3 Development
                        </h3>
                        <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
                            Apr 25, 2023 . 3 min read
                        </p>
                    </div>



                </div>
            </Col>
            <Col sm='12' md='5'>
                <div className='mb-3'>
                    <List image={n3} />
                </div>
                <div className='mb-3'>
                    <List image={n2} />
                </div>
                <List />
            </Col>

        </Row>
    )
}

export default Trending