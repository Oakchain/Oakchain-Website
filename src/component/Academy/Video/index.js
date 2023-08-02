import React from 'react'
import defaultImg from '../../../assets/images/vid1.svg'
import defaultImg2 from '../../../assets/images/vid2.svg'
import ac1 from '../../../assets/images/ac1.svg'
import ac2 from '../../../assets/images/ac2.svg'
import ac3 from '../../../assets/images/ac3.svg'

import { useNavigate } from 'react-router-dom'
const VideoCard = ({ type }) => {
    const images = [defaultImg, defaultImg2]
    const navigate = useNavigate()

    return (
        <>
            <div className='d-xs-block d-md-flex align-items-center oak-video__course_wrapper mb-3'
                onClick={() => {
                    navigate('/academy/video/1')
                }}
                role='button'>
                <div className='oak-video-course__cover-image'>
                    <img src={type === 'even' ? images[0] : images[1]} alt='icon' />
                </div>
                <div className='oak-video__course_details__wrapper w-100'>

                    <h3 className='mb- video-course__title pt-1'>{type === 'even' ? 'Web3 University' : 'Web3 Tutorial (Complete Web3 tutorial course)'}</h3>

                    <div className='d-block d-md-flex align-items-center video-content__wrapper w-100'>
                        <div className='d-flex align-items-center  py-2 video-content_feature'>
                            <div className='pe-3 oak-news_logo__wrapper'>
                                <img src={ac1} alt='icon' />
                            </div>
                            <p className='mb-0 oak-academy__features pt-1'>5 Assignments and 7 Lessons</p>
                        </div>
                        <div className='d-flex align-items-center  py-2 video-content_feature'>
                            <div className='pe-3 oak-news_logo__wrapper'>
                                <img src={ac2} alt='icon' />
                            </div>
                            <p className='mb-0 oak-academy__features pt-1'>6 courses and 29 modules in total</p>
                        </div>
                        <div className='d-flex align-items-center  py-2 video-content_feature'>
                            <div className='pe-3 oak-news_logo__wrapper'>
                                <img src={ac3} alt='icon' />
                            </div>
                            <p className='mb-0 oak-academy__features pt-1'>3hr 45m</p>
                        </div>
                    </div>

                    <div className='d-none d-md-block'>
                        {
                            type === 'even' ? <div className='d-flex align-items-center justify-content-between mb-4'>
                                <div class="course-progress-bar">
                                    <div class="course-progress" id="progress"></div>
                                </div>
                                <p className='course-progress__percentage mb-0'>87%</p>
                                <div>
                                    <button className='oak-btn btn'>
                                        Continue Course
                                    </button>
                                </div>
                            </div> :
                                <div className='d-flex align-items-center justify-content-end'>
                                    <div>
                                        <button className='oak-btn btn'>
                                            Start Course
                                        </button>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className='d-block d-md-none oak-video__course_details__wrapper pb-3'>


                    {
                        type === 'even' ?
                            <div className='d-flex align-items-center justify-content-between mb-2'>
                                <div class="course-progress-bar">
                                    <div class="course-progress" id="progress"></div>
                                </div>
                                <p className='course-progress__percentage mb-0'>87%</p>

                            </div> : null
                    }

                    {
                        type === 'even' ?

                            <div>
                                <button className='oak-btn btn'>
                                    Continue Course
                                </button>
                            </div> :
                            <div className='d-flex align-items-center justify-content-end'>
                                <div>
                                    <button className='oak-btn btn'>
                                        Start Course
                                    </button>
                                </div>
                            </div>
                    }



                </div>
            </div>


        </>

    )
}

export default VideoCard