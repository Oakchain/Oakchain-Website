import React, { useState } from 'react'
import { Banner as AcademyBanner } from "../../../component/Academy";
import VideoCard from '../../../component/Academy/Video';
import { arrayGenerator } from '../../../utils';



const VideoCourses = () => {
    const [activeTag, setActiveTag] = useState('All');
    const academyTag = ['All', 'In progress', 'Completed']

    return (
        <div className='oak-container-fluid'>
            <div className='oak-mb'>
                <AcademyBanner />
            </div>
            <div>
                <div className='d-block d-md-flex align-items-center justify-content-between  oak-mb'>
                    <div className='mb-4 mb-md-0 d-md-block d-flex justify-content-between '>
                        <h5 className="oak-section__title ">Welcome to the Academy</h5>
                        <div className='d-block d-md-none pe-2 '>
                            {''}
                        </div>
                    </div>
                    <div className='mb-4 mb-md-0'>
                        <div className="d-flex align-items-center" >
                            {
                                academyTag.map(el => <p
                                    role='button'
                                    onClick={() => {
                                        setActiveTag(el)
                                    }}
                                    className={`me-1 oak-news_tag text-center flex-shrink-0 mb-0 ${activeTag === el ? 'active' : ""}`}>
                                    {el}
                                </p>
                                )
                            }
                        </div>
                    </div>
                </div>

                {arrayGenerator(4).map((el, i) => <VideoCard type={i % 2 === 0 ? 'even' : 'odd'} />)}
            </div>
        </div>
    )
}

export default VideoCourses