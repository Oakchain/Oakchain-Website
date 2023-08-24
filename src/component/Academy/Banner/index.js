import React from 'react'
import lightLogo from '../../../assets/images/lightLogo.svg'
import ac1 from '../../../assets/images/ac1.svg'
import ac2 from '../../../assets/images/ac2.svg'
import ac3 from '../../../assets/images/ac3.svg'
import ac4 from '../../../assets/images/ac4.svg'
import '../../../assets/style/index.css'
const Banner = () => {
    return (
        <div className='d-block d-md-flex align-items-center'>
            <div className='oak-academy-banner__card me-5'>
                <div>
                    <img src={lightLogo} alt='logo' />
                </div>
                <div className='h-100 d-flex mt-3 pt-4 mt-md-5 pt-md-4'>
                    <h3 className='oak-academy__banner-text'>
                        Blockchain for Everyone
                    </h3>

                </div>

            </div>
            <div>
                <h3 className='oak-academy__banner_title'>
                    Blockchain for Everyone
                </h3>
                <div>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='pe-3 oak-news_logo__wrapper'>
                            <img src={ac1} alt='icon' />
                        </div>
                        <p className='mb-0 oak-academy__features pt-md-1 pt-0 academy-info'>Learn the basics of blockchain & crypto</p>
                    </div>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='pe-3 oak-news_logo__wrapper'>
                            <img src={ac2} alt='icon' />
                        </div>
                        <p className='mb-0 oak-academy__features pt-md-1 pt-0 academy-info'>Read Articles, Watch videos & answer quiz questions</p>
                    </div>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='pe-3 oak-news_logo__wrapper'>
                            <img src={ac3} alt='icon' />
                        </div>
                        <p className='mb-0 oak-academy__features pt-md-1 pt-0 academy-info'>3hr 45m</p>
                    </div>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='pe-3 oak-news_logo__wrapper'>
                            <img src={ac4} alt='icon' />
                        </div>
                        <p className='mb-0 oak-academy__features secondary pt-1'>Receive NFT certificate upon completing all 6 courses</p>
                    </div>
                    <button className='oak-btn mt-3 dark-btn'>
                        Start Course
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner