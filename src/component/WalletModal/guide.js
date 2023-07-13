import React from 'react'
import arrow from '../../assets/images/backArrow.svg'
import prev from '../../assets/images/prev.svg'
import next from '../../assets/images/next.svg'
import guide from '../../assets/images/assets.svg'



const Guide = ({ setSection }) => {
    return (
        <div className='oak-wallet__container'>
            <div className='d-flex align-items-center mb-3'>
                <div role='button' onClick={() => {
                    setSection('scan-page')
                }}>
                    <img src={arrow} alt='icon' />
                </div>
                <p className='w-100 text-center scan-text mb-0'>What are Wallets</p>
            </div>

            <div className='d-flex align-items-center justify-content-between mb-3'>
                <div>
                    <img src={prev} alt='icon' />
                </div>
                <div>
                    <img src={guide} alt='icon' />
                </div>
                <div>
                    <img src={next} alt='icon' />
                </div>

            </div>
            <div>
                <h3 className='guide-main__text text-center'>For your digital assets</h3>
                <p className='guide-sub__text text-center mb-4'>Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.</p>

            </div>
            <div className='pb-4 d-flex align-items-center justify-content-around'>
                <button className='oak-btn btn'>
                    Get a Wallet
                </button>
                <button className='oak-btn btn'>
                    Learn More
                </button>
            </div>

        </div>
    )
}

export default Guide