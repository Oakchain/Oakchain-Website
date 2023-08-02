import React from 'react'
import logo from '../../../assets/images/onLogo.svg'
import defaultImg from '../../../assets/images/n1.svg'
import views from '../../../assets/images/views.svg'
import share from '../../../assets/images/share.svg'
import comment from '../../../assets/images/comment.svg'
import { useNavigate } from 'react-router-dom'



const Grid = () => {
  const navigate = useNavigate()

  return (
    <div className='oak-grid__news  bg-white h-100 flex-shrink_mobile'
      role='button'
      onClick={
        () => {
          navigate('/news/1')
        }
      }>
      <div className='oak-grid__news_img__wrapper position-relative'>
        <div className='w-100 grid-main_img'>
          <img src={defaultImg} alt='main_img' className='w-100 h-100' style={{
            objectFit: 'cover'
          }} />
        </div>
      </div>
      <div className='oak-main-news_details__wrapper grid-display__type'>
        <div className='d-flex align-items-center justify-content-between mb-1'>
          <div className='d-flex align-items-center  py-2'>
            <div className='pe-1 oak-news_logo__wrapper'>
              <img src={logo} alt='icon' />
            </div>
            <p className='mb-0 oak-news__text pt-1'>Oak News</p>
          </div>
          <div className=' d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center  py-2 pe-3'>
              <div className='pe-1 oak-stats__icon'>
                <img src={views} alt='icon' />
              </div>
              <p className='mb-0 oak-news__stats pt-1'>1.5m</p>
            </div>
            <div className='d-flex align-items-center  py-2 pe-3'>
              <div className='pe-1 oak-stats__icon'>
                <img src={comment} alt='icon' />
              </div>
              <p className='mb-0 oak-news__stats pt-1'>35K</p>
            </div>
            <div className='d-flex align-items-center  py-2'>
              <div className='pe-1 oak-stats__icon'>
                <img src={share} alt='icon' />
              </div>
              <p className='mb-0 oak-news__stats pt-1'>35K</p>
            </div>
          </div>
        </div>
        <h3 className='oak-news__title grid-display__type  mb-0'>
          Polygon Labs and Google Partner to Boost Web3 Development
        </h3>
        <p className='text-right oak-news__date mb-0 d-flex justify-content-end'>
          Apr 25, 2023 . 3 min read
        </p>
      </div>



    </div>

  )
}

export default Grid