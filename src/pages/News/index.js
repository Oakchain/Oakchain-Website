import React, { useEffect, useState } from 'react'
import AuthGuard from "../../Layout/AuthGuard";
import { Trending, Featured, List, Grid } from "../../component/News";
import ft1 from '../../assets/images/feat1.svg'
import ft2 from '../../assets/images/feat2.svg'
import ft3 from '../../assets/images/feat4.svg'
import filter from '../../assets/images/filterIcon.svg'
import aint1 from '../../assets/images/AINT1.svg'
import aint2 from '../../assets/images/AINT2.svg'
import int1 from '../../assets/images/INT.svg'
import int2 from '../../assets/images/INT1.svg'
import select from '../../assets/images/selectDropdown.svg'
import { Row, Col } from 'reactstrap'



import '../../assets/style/event.css'

const newsTag = ['All', 'NFT', 'Gaming', 'Collectibles', 'DeFi', 'Metaverse', 'Startup', 'Infrastructure', 'Education']
const arrayGenerator = (length) => {
    return Array.from({ length }, (_, index) => index + 1);
};

const News = () => {
    const [activeTag, setActiveTag] = useState('All');
    const [displayType, setDisplayType] = useState('list')

    // useEffect(() => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth' // Use 'smooth' for smooth scrolling, or 'auto' for instant scrolling
    //     });
    // }, [])

    return (
        <AuthGuard>
            <div className="">
                <div className="oak-mb oak-container-fluid">
                    <Trending />
                </div>
                <div className="d-flex align-items-center justify-content-start oak-container-fluid">
                    <h5 className="oak-section__title oak-mb">Featured News</h5>
                </div>
                <div className="d-flex align-items-center overflow-auto flex-nowrap ps-5 ms-4 featured-news__container oak-mb">
                    <Featured image={ft1} />
                    <Featured image={ft2} />
                    <Featured image={ft3} />
                    <Featured image={ft1} />
                    <Featured image={ft2} />
                    <Featured image={ft3} />
                </div>
                <div className="d-flex align-items-center justify-content-between oak-container-fluid oak-mb">
                    <div className="d-flex align-items-center justify-content-between">
                        {
                            newsTag.map(el => <p
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
                    <div className="d-flex align-items-center">
                        <div className={`${displayType === 'grid' ? 'active' : ""} news_display__type d-flex align-items-center justify-content-center me-2 `}
                            role="button"
                            onClick={() => {
                                setDisplayType('grid')
                            }}
                        >
                            <img src={displayType === 'grid' ? aint1 : int2} alt='icon' />

                        </div>
                        <div className={`${displayType === 'list' ? 'active' : ""} news_display__type d-flex align-items-center justify-content-center me-2 `}
                            role="button"
                            onClick={() => {
                                setDisplayType('list')
                            }}
                        >
                            <img src={displayType === 'list' ? aint2 : int1} alt='icon' />

                        </div>


                        <div className="news_filter__wrapper d-flex align-items-center justify-content-between">
                            <div className="d-flex pe-3 align-items-center">
                                <div className="pe-2">
                                    <img src={filter} alt='icon' />
                                </div>
                                <p className="mb-0">Filter</p>
                            </div>
                            <div>
                                <img src={select} alt='icon' />
                            </div>


                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-start oak-container-fluid">
                    <h5 className="oak-section__title oak-mb">All News</h5>
                </div>
                <div className='oak-container-fluid '>
                    {
                        displayType == 'list' ? <Row className='g-3'>
                            {arrayGenerator(15).map(el =>
                                <Col md='6' lg='4' sm='12'>
                                    <List type={'all-news'} />
                                </Col>
                            )}
                        </Row> :
                            <Row className='g-3'>
                                {arrayGenerator(16).map(el =>
                                    <Col md='4' lg='3' sm='12'>
                                        <Grid />
                                    </Col>)
                                }
                            </Row>
                    }





                </div>


            </div>
        </AuthGuard>
    )
}

export default News