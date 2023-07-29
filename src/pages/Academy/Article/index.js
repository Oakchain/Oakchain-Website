import React, { useState } from 'react'
// import academyBg from '../../../assets/images/academyBg.svg'
import { arrayGenerator } from '../../../utils';
import Article from '../../../component/Academy/Article';
import art1 from '../../../assets/images/art1.svg'
import art2 from '../../../assets/images/art2.svg'
import art3 from '../../../assets/images/art3.svg'
import { Row, Col } from 'reactstrap';
import './index.css'


const ArticleCourses = () => {
    const images = [art1, art2, art3];
    const [activeTag, setActiveTag] = useState('All');
    const academyTag = ['All', 'Active', 'In progress', 'Completed']

    return (
        <div>
            <div className='d-flex align-items-center justify-content-between oak-container-fluid oak-mb' id='readTabbedComp'>
                <div>
                    <h5 className="oak-section__title w-100">Read and Learn about Blockchain and Crypto</h5>
                </div>
                
                    <div className="d-flex align-items-center" id='mappedTabbedComp' >
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
            <div className='oak-container-fluid' id='coursesComp'>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i + 1} />
                        </Col>
                    )}
                </Row>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i + 1} />
                        </Col>
                    )}
                </Row>
                <Row className='g-3 mb-3'>
                    {arrayGenerator(3).map((el, i) =>
                        <Col sm='12' md='4'>
                            <Article image={images[i]} id={i + 1} />
                        </Col>
                    )}
                </Row>

            </div>

        </div>
    )
}

export default ArticleCourses
