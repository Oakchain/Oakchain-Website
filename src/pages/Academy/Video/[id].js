import React from 'react'
import AuthGuard from '../../../Layout/AuthGuard'
import lightLogo from '../../../assets/images/lightLogo.svg'
import ac1 from '../../../assets/images/ac1.svg'
import ac2 from '../../../assets/images/ac2.svg'
import ac3 from '../../../assets/images/ac3.svg'
import defaultImg from '../../../assets/images/vid1.svg'
import { Row, Col } from 'reactstrap'
import VideoChapter from '../../../component/Academy/Video/Chapter'
import { arrayGenerator } from '../../../utils'


const VideoDetails = () => {
    return (
        <AuthGuard>
            <div className='oak-container-fluid'>
                <p className="page-details__title">Home / Academy /Courses/Web3 University</p>
                <div className='d-block d-md-flex align-items-center oak-mb '>
                    <div className='me-0 me-md-5'>
                        <img src={defaultImg} alt='course_img' className='video-course__img_container' />
                    </div>
                    <div>
                        <h3 className='oak-academy__banner_title'>
                            Web3 University
                        </h3>
                        <div>
                            <div className='d-flex align-items-center  py-2'>
                                <div className='pe-3 oak-news_logo__wrapper'>
                                    <img src={ac1} alt='icon' />
                                </div>
                                <p className='mb-0 oak-academy__features video-feature pt-1'>5 Assignments and 7 Lessons</p>
                            </div>
                            <div className='d-flex align-items-center  py-2'>
                                <div className='pe-3 oak-news_logo__wrapper'>
                                    <img src={ac2} alt='icon' />
                                </div>
                                <p className='mb-0 oak-academy__features video-feature pt-1'>6 courses and 29 modules in total</p>
                            </div>
                            <div className='d-flex align-items-center  py-2'>
                                <div className='pe-3 oak-news_logo__wrapper'>
                                    <img src={ac3} alt='icon' />
                                </div>
                                <p className='mb-0 oak-academy__features video-feature pt-1'>3hr 45m</p>
                            </div>
                            <p className='oak-video_description mb-0 mt-2'>
                                Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Orci volutpat erat feugiat accumsan facilisis a duis vestibulum fames. Fames mauris semper turpis ullamcorper blandit pulvinar quam. Aenean condimentum semper condimentum egestas metus. Orci ultrices scelerisque est lacinia. Convallis orci in etiam id malesuada nibh consectetur sit. Amet ac eu arcu cum a ultricies. Volutpat commodo donec non viverra. Molestie mattis mauris mi ultrices enim. Lectus viverra consectetur tellus tellus quam faucibus iaculis in. Quis velit quisque justo est.
                            </p>

                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className=" d-flex align-items-center justify-content-between mb-4">
                        <h5 className="oak-section__title">Chapter 1</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-3"></p>
                        </div>
                    </div>
                    <div className='oak-cstm__row '>
                        {
                            arrayGenerator(8).map(el =>
                                <div className='oak-cstm__col '  >
                                    <VideoChapter />
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className='mb-4'>
                    <div className=" d-flex align-items-center justify-content-between mb-4">
                        <h5 className="oak-section__title">Chapter 2</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-3"></p>
                        </div>
                    </div>
                    <div className='oak-cstm__row'>
                        {
                            arrayGenerator(5).map(el =>
                                <div className='oak-cstm__col' sm={'20%'} md={'20%'} lg={'20%'} >
                                    <VideoChapter />
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className='mb-4'>
                    <div className=" d-flex align-items-center justify-content-between mb-4">
                        <h5 className="oak-section__title">Chapter 3</h5>
                        <div className="d-flex align-items-center" role='button'>
                            <p className="oak-redirect__text mb-0 pe-3"></p>
                        </div>
                    </div>
                    <div className='oak-cstm__row'>
                        {
                            arrayGenerator(8).map(el =>
                                <div className='oak-cstm__col' sm={'20%'} md={'20%'} lg={'20%'} >
                                    <VideoChapter />
                                </div>
                            )
                        }

                    </div>
                </div>
                <div>

                </div>


            </div>

        </AuthGuard>

    )
}

export default VideoDetails;