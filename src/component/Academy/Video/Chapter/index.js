import React from 'react'
import logo from '../../../../assets/images/onLogo.svg'
import defaultImg from '../../../../assets/images/vid1.svg'
import views from '../../../../assets/images/views.svg'
import share from '../../../../assets/images/share.svg'
import comment from '../../../../assets/images/comment.svg'
import { useNavigate } from 'react-router-dom'



const VideoChapter = () => {
    const navigate = useNavigate()

    return (
        <div className='oak-grid__news  bg-white h-100 position-relative'
            role='button'
            onClick={
                () => {
                    navigate('/academy/episode/1')
                }
            }>
            <div className='oak-grid__news_img__wrapper position-relative mb-md-3 mb-2'>
                <div className='w-100 video-episode__img_wrapper'>
                    <img src={defaultImg} alt='main_img' className='w-100 h-100' style={{
                        objectFit: 'cover'
                    }} />
                </div>
                <p className='episode-time__count position-absolute mb-0 px-2 '>4:50</p>

            </div>
            <div className='oak-main-news_details__wrapper grid-display__type'>

                <h3 className='oak-video_episode__title   mb-0'>
                    Polygon Labs and Google Partner to Boost Web3 Development
                </h3>
            </div>


        </div>

    )
}

export default VideoChapter