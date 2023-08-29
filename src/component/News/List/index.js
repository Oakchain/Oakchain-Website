import React from 'react'
import defaultImg from '../../../assets/images/n1.svg'
import logo from '../../../assets/images/onLogo.svg'
import { useNavigate } from 'react-router-dom'
import "../../../assets/style/index.css"
const NewsGrid = ({ image, type }) => {
    const navigate = useNavigate()

    return (
        <div className='d-flex align-items-center flex-shrink_mobile bannerWrapper'
            role='button'
            onClick={
                () => {
                    navigate('/news/1')
                }
            }>
            <div className='news-grid__img_wrapper pe-md-3 pe-0'>
                <img src={image ?? defaultImg} alt='icon' />
            </div>
            <div className='px-2 px-md-0 '>
                <div className='d-flex align-items-center mb-2'>
                    <div className='pe-1 oak-news_logo__wrapper'>
                        <img src={logo} alt='icon' />
                    </div>
                    <p className='mb-0 oak-news__text pt-1'>Oak News</p>
                </div>

                <h3 className={`oak-news__title oak-news-title ${type === 'all-news' ? 'all-news' : ""}`}>
                    Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur.
                </h3>
                <p className='text-right oak-news__date mb-0 d-flex justify-content-end oak-news-date'>
                    Apr 25, 2023 . 3 min read
                </p>
            </div>

        </div>
    )
}

export default NewsGrid