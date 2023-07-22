import React from 'react'
import defaultImg from '../../../assets/images/n1.svg'
import logo from '../../../assets/images/onLogo.svg'
const NewsGrid = ({ image }) => {
    return (
        <div className='d-flex align-items-center'>
            <div className='news-grid__img_wrapper pe-3'>
                <img src={image ?? defaultImg} alt='icon' />
            </div>
            <div>
                <div className='d-flex align-items-center mb-2'>
                    <div className='pe-1 oak-news_logo__wrapper'>
                        <img src={logo} alt='icon' />
                    </div>
                    <p className='mb-0 oak-news__text pt-1'>Oak News</p>
                </div>

                <h3 className='oak-news__title'>
                    Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur.
                </h3>
                <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
                    Apr 25, 2023 . 3 min read
                </p>
            </div>

        </div>
    )
}

export default NewsGrid