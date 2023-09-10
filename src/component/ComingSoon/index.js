import React from 'react'
import comingSoon from '../../assets/images/comingsoon.png'
const ComingSoon = () => {
    return (
        <div className='coming-soon-page d-flex align-items-center justify-content-center'>
            <div>
                <div className='mb-4 text-center'>
                    <img src={comingSoon} />
                </div>
                <h3 className='coming-soon-main-text mb-0'>
                    Stick around with us
                </h3>
                <p className='coming-soon-sub-text'>
                    Updates to these pages are coming soon!!!
                </p>
            </div>
        </div>
    )
}

export default ComingSoon