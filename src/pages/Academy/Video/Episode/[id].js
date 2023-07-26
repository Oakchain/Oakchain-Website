import React from 'react'
import AuthGuard from '../../../../Layout/AuthGuard'
import defaultImg from '../../../../assets/images/episode.svg'
import activeIcon from '../../../../assets/images/acPlay.svg'
import downloadIcon from '../../../../assets/images/downloadIcon.svg'
import EpisodeChapter from '../../../../component/Academy/Video/Episode'
import { Row, Col } from 'reactstrap'
import { arrayGenerator } from '../../../../utils'
import Assignment from '../../../../component/Academy/Assignment'
import Questions from '../../../../component/Academy/Lessons/Questions'


const EpisodeDetails = () => {
    return (
        <AuthGuard>
            <div className='oak-container-fluid'>
                <p className="page-details__title">Home / Academy /Courses/Web3 University</p>
                <div>
                    <h3 className='episode-title'>Module 1: Introduction to blockchain technology</h3>
                    <p className='episode-description'>Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Orci volutpat erat feugiat accumsan facilisis a duis vestibulum fames. Fames mauris semper turpis ullamcorper blandit pulvinar quam. Aenean condimentum semper condimentum egestas metus. Orci ultrices scelerisque est lacinia. Convallis orci in etiam id malesuada nibh consectetur sit. Amet ac eu arcu cum a ultricies. Volutpat commodo donec non viverra. Molestie mattis mauris mi ultrices enim. Lectus viverra consectetur tellus tellus quam faucibus iaculis in. Quis velit quisque justo est.</p>
                </div>
                <Row className='gx-3 oak-mb'>
                    <Col sm='12' md='8' className=''>
                        <div className='position-relative main-episode__img_container overflow-hidden mb-3'>
                            <div className='w-100 h-100'>
                                <img src={defaultImg} alt='course_img' className='w-100 h-100' style={{
                                    objectFit: 'cover'
                                }} />
                            </div>
                            <div className='position-absolute '
                                style={{
                                    bottom: '40%',
                                    left: "45%"
                                }} >
                                <img src={activeIcon} alt='course_img' />
                            </div>
                        </div>
                        <div>
                            <Row className='g-3'>
                                {arrayGenerator(4).map(el =>
                                    <Col sm='12' md='3'>
                                        <EpisodeChapter />

                                    </Col>
                                )}
                            </Row>

                        </div>
                    </Col>
                    <Col sm='12' md='4'>
                        <div className='episode-transcript__wrapper  overflow-auto '>
                            <div className='d-flex align-items-center justify-content-between transcript-download__header'>
                                <p className='episode-transcript_text mb-0'>Video Transcript</p>
                                <div className='transcript-download__wrapper d-flex align-items-center justify-content-center'>
                                    <img src={downloadIcon} alt='icon' />
                                </div>
                            </div>
                            <p className='transcript-text mb-0'>
                                Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Orci volutpat erat feugiat accumsan facilisis a duis vestibulum fames. Fames mauris semper turpis ullamcorper blandit pulvinar quam. Aenean condimentum semper condimentum egestas metus. Orci ultrices scelerisque est lacinia. Convallis orci in etiam id malesuada nibh consectetur sit. Amet ac eu arcu cum a ultricies. Volutpat commodo donec non viverra. Molestie mattis mauris mi ultrices enim. Lectus viverra consectetur tellus tellus quam faucibus iaculis in. Quis velit quisque justo est. Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices. Lorem ipsum dolor sit amet consectetur. Neque pellentesque porta consequat iaculis tempus ornare. Turpis viverra neque donec rhoncus consequat a aliquet eu. Ultrices blandit pellentesque posuere risus vulputate. Phasellus justo duis lacinia eu. A ac pretium proin pretium mauris ultrices.
                            </p>

                        </div>
                    </Col>
                </Row>

                <div className='oak-mb'>
                    <h3 className='episode-section_title'>Assignment</h3>
                    <Row>
                        {
                            arrayGenerator(2).map(el =>
                                <Col sm='12' md='6'>
                                    <Assignment />
                                </Col>
                            )
                        }
                    </Row>


                </div>
                <div className='oak-mb'>
                    <h3 className='episode-section_title'>Lessons</h3>
                    <Row>
                        {
                            arrayGenerator(4).map((el, i) =>
                                <Col sm='12'>
                                    <Questions id={i + 1} />
                                </Col>
                            )
                        }
                    </Row>


                </div>

            </div>

        </AuthGuard >

    )
}

export default EpisodeDetails;