import React from 'react'
import logo from '../../../../assets/images/onLogo.svg'
import defaultImg from '../../../../assets/images/vid1.svg'
import { useNavigate } from 'react-router-dom'
import playIcon from '../../../../assets/images/playCircle.svg'


const EpisodeChapter = () => {
    const navigate = useNavigate()

    return (
        <div className='oak-grid__news  bg-white h-100 position-relative'
            role='button'
            onClick={
                () => {
                    navigate('/academy/episode/1')
                }
            }>
            <div className='oak-grid__news_img__wrapper position-relative'>
                <div className='w-100 video-episode__img_wrapper'>
                    <img src={defaultImg} alt='main_img' className='w-100 h-100' style={{
                        objectFit: 'cover'
                    }} />
                </div>
                <p className='episode-time__count position-absolute mb-0 px-2 '>4:50</p>
                <div className='position-absolute ' style={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 0,
                    width: '100%'
                }} >
                    <img src={playIcon} alt='icon' className='player-ico' />

                </div>
            </div>
        </div>

    )
}

export default EpisodeChapter