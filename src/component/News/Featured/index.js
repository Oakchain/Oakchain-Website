import React from 'react'
import logo from '../../../assets/images/oakV3.svg'

const Featured = ({ image }) => {
  return (
    <div className='featured-news__card position-relative'
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 47, 0.00) 0 %, #00002F 100 %), url(${image})`
      }}
    >
      <div className='d-flex position-absolute featured-news__tags_wrapper'>
        <p className='mb-0 featured-news__tag'>Bitcoin</p>
        <p className='mb-0 featured-news__tag'>Ethereum</p>
      </div>
      <div className='featured-news__details_wrapper'>
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
    </div >
  )
}

export default Featured